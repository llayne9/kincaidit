import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, shareReplay } from 'rxjs/operators';
import { DataModel } from '../model/data.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    isLoadingResults = false;
    constructor(private http: HttpClient) { }

    getData(): Observable<DataModel[]> {
        const data: any = this.http.get<DataModel[]>(`${environment.apiURL}`)
            .pipe(
                map(response => {
                    if (!response.length) {
                        return [response];
                    }
                    return response;
                }),
                shareReplay(),
                catchError(() => {
                    return [];
                  })
                );

        return data;
    }
}



// .pipe(
//     startWith({}),
//     switchMap(() => {
//       this.isLoadingResults = true;
//       return this.exampleDatabase!.getRepoIssues(
//         this.sort.active, this.sort.direction, this.paginator.pageIndex);
//     }),
//     map(data => {
//       // Flip flag to show that loading has finished.
//       this.isLoadingResults = false;
//       this.isRateLimitReached = false;
//       this.resultsLength = data.total_count;

//       return data.items;
//     }),
//     catchError(() => {
//       this.isLoadingResults = false;
//       // Catch if the GitHub API has reached its rate limit. Return empty data.
//       this.isRateLimitReached = true;
//       return observableOf([]);
//     })