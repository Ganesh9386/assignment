import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  form : FormGroup;
  item_id! : number;
  category : any;
  constructor(
      private _activate : ActivatedRoute,
      private common: CommonService,
      private formBuilder : FormBuilder,
      private router : Router
  ) { 
    this.form = this.formBuilder.group({
      item_id : new FormControl(),
      item_name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z ]*$")]),
      item_price : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(6)]),
      category : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
    this.item_id = this._activate.snapshot.params.id;
    this.common.getItemUpdate(this.item_id)
    .subscribe((res : any)=>{
      for(let d of res.data){
        this.form.patchValue({
          item_id : d.item_id,
          item_name : d.item_name,
          item_price : d.item_price,
          category : d.category_id,
          description : d.description
        })
      }//end of for
    });

    this.common.getCategory()
    .subscribe((res : any)=>{
      this.category = res.data;
    },error=>{
      console.log(error)
    })
  }

  get f(){
    return this.form.controls;
  }

  updateItem(){
    this.common.updateItem(this.form.value)
    .subscribe((res : any)=>{
      if(res.status == 'success'){
        this.router.navigate(['item-list']);
      }
    },error=>{
      console.log(error);
    })
  }

}
