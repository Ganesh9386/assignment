import { Component, OnInit } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-all-candidates',
  templateUrl: './all-candidates.component.html',
  styleUrls: ['./all-candidates.component.css']
})
export class AllCandidatesComponent implements OnInit {

  data : any;
  newData : any = [];
  constructor(private comman : CommanService) { }

  ngOnInit(): void {
    this.data = this.comman.candidate_data;

    for(let d of this.data){
      if(d.department!='Development'){
        this.newData.push({id : d.id, name : d.name, department : d.department,joining_date:d.joining_date});
      }
    }
  }

}
