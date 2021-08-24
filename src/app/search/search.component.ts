import { Component, OnInit } from '@angular/core';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name! : String ;
  data : any;
  constructor(private comman : CommanService) { }

  ngOnInit(): void {
    this.data = this.comman.candidate_data;
  }

  search(){
    if(this.name!==""){
      this.data = this.data.filter((res : any)=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }else{
      this.data = this.comman.candidate_data;
    }
    
  }

}
