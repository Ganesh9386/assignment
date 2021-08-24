import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor() { }

  candidate_data=[ 
    {id : 11,name : "Ash",department : "Finance",joining_date : '2016,10,08'},
    {id : 12,name : "John",department : "HR", joining_date : '2011/01/18'},
    {id : 13,name : "Zuri",department : "Operations", joining_date : '2019/11/28'},
    {id : 14,name : "Vish",department : "Development",   joining_date : '2017/07/07'},
    {id : 15,name : "Barry",department : "Operations", joining_date : '2014/08/19'},
    {id : 16,name : "Ady", department : "Finance",  joining_date : '2014/10/05'}, 
    {id : 17,name : "Gare",department : "Development",  joining_date : '2014/04/06'},
    {id : 18,name : "Hola", department : "Development",  joining_date : '2010/12/08'}, 
    {id : 19,name : "Ola", department : "HR",  joining_date : '2011/05/07'},
    {id : 20,name : "Kim", department : "Finance",  joining_date : '2010/10/20'}]




}
