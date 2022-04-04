import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class LoadingService{
    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$:Observable<boolean> = this.loadingSubject.asObservable();

    loadStart(){
        this.loadingSubject.next(true);
    }

    loadComplete(){
        this.loadingSubject.next(false);
    }
}