import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items : any;
  constructor(private common : CommonService) { }

  ngOnInit(): void {
    this.common.getItem()
    .subscribe((res:any)=>{
      this.items = res.data;
    });
  }

  delete(id : number){
    if(confirm('Are you sure')){
      this.common.deleteItem(id)
      .subscribe((res)=>{
        alert('Delete Record');
        this.common.getItem()
        .subscribe((res:any)=>{
          this.items = res.data;
        });
      },error=>{
        console.log(error)
      })
    }
  }

}
