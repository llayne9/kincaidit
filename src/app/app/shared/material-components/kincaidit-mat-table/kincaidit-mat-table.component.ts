import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { DataModel } from 'src/app/model/data.model';
import { ConfigService } from 'src/app/service/config.service';

const ELEMENT_DATA: DataModel[] = [
  {
    version: "string",
    updateDate: "string",
    environment: "string",
  },
];

@Component({
  selector: 'app-kincaidit-mat-table',
  templateUrl: './kincaidit-mat-table.component.html',
  styleUrls: ['./kincaidit-mat-table.component.scss']
})
export class KincaiditMatTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public displayedColumns: string[] = ['version', 'environment', 'updateDate'];
  public dataSource$: Observable<DataModel[]>;
  dataSource: MatTableDataSource<DataModel>;
  pageSize = 3;
  pageSizeOptions = [];

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.dataSource$ = this.configService.getData();

  }

  ngAfterViewInit() {
    this.dataSource$.subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.paginator.showFirstLastButtons = true;
      this.calculatePageSize(res.length);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.calculatePageSize(this.dataSource.filteredData.length)
  }

  calculatePageSize(length) {
    const nextPageSize = Math.ceil(length / 3);
    this.pageSizeOptions = [];
    this.pageSizeOptions.push(nextPageSize);
    for (let index = 2; index < 3; index++) {
      if (nextPageSize * index <= length) {
        this.pageSizeOptions.push(nextPageSize * index);
      }
    }
    this.pageSizeOptions.push(length);
    this.pageSizeOptions = this.pageSizeOptions.filter((element, index) => {
      return this.pageSizeOptions.indexOf(element) === index;
    });
  }
}
