import { Component, OnInit } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  data : any;
  newData : any = [];
  constructor(private comman : CommanService) { }

  ngOnInit(): void {
    this.data = this.comman.candidate_data;
    // console.log(this.calcDate(new Date(),new Date('2019,08,05')));
    for(let d of this.data){
      let diffYear = this.calcDate(new Date(),new Date(d.joining_date));
      if(diffYear >= 2){
        this.newData.push({id : d.id, name : d.name, department : d.department,joining_date:d.joining_date});
      }
    }
  
  }

  calcDate(date1 : any ,date2: any) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
      return years;
  }

    

}
