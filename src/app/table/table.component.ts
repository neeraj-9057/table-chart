import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PeriodicElement } from '../interface/PeriodicElement';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserdataService } from '../services/userdata.service';



// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{

  title = 'A-meterial-table';
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);


  users:any;
  constructor(private userdata:UserdataService){
    // userdata.users().subscribe((data)=>{
    //   console.warn("data",data);
    //   this.users=data
    // })
  }
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    // this.userdata.users().subscribe((data)=>{  this.dataSource = new MatTableDataSource(data);
    // });
    this.getusers();
  }
  public getusers(){
    let resp = this.userdata.users();
    resp.subscribe(Report=>this.dataSource.data= Report as PeriodicElement[]);
  }
}
