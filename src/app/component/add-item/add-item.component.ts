import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  form : FormGroup;
  category : any;

  constructor(
      private formBuilder : FormBuilder,
      private comman : CommonService
  ) {
    this.form = this.formBuilder.group({
      item_name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z ]*$")]),
      item_price : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(6)]),
      category : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required])
    });
   }

  ngOnInit(): void {
    this.comman.getCategory()
    .subscribe((res : any)=>{
      this.category = res.data;
    },error=>{
      console.log(error)
    })
  }

  saveItem(){
    this.comman.saveItem(this.form.value)
    .subscribe((res : any)=>{
      if(res.status == 'success'){
        alert(res.message);
        this.form.reset();
      }
    },error =>{
      console.log(error)
    })
  }

  get f(){
    return this.form.controls;
  }

}
