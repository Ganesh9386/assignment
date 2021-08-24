import { Component, OnInit } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  data: any = [];
  myArr : any = [];
  constructor(private comman : CommanService) { }

  ngOnInit(): void {
    this.data = this.comman.candidate_data;
    const unique = [...new Set(this.data.map((item : any) => item.department))];
  

    const frequency = this.data
    .map(({ department } : any) => department)
    .reduce((names : any, department : any) => {
      const count = names[department] || 0;
      names[department] = count + 1;
      return names;
    }, {});
   
    for (const property in frequency) {
      this.myArr.push({department : `${property}`,total : `${frequency[property]}`});
    }
    
  }
  
}
