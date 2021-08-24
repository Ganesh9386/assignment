import { Component, OnInit } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  data : any;
  constructor(private comman : CommanService) { }

  ngOnInit(): void {
    this.data = this.comman.candidate_data;
  }

  sortName(){
    this.data.sort((a :any, b:any)=>a.name.localeCompare(b.name));
  }

  sortDate(){
    this.data.sort(function(a : any,b : any){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return <any>new Date(a.joining_date) - <any>new Date(b.joining_date);
    });
  }

}
