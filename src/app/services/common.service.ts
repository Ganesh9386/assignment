import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _api = "http://localhost/test_api/";
  constructor(private http : HttpClient) {  }

  

  saveItem(data : any){
    return this.http.post(this._api+'save_item_api.php',data);
  }

  getItem(){
    return this.http.get( this._api+'get_all_item_api.php');
  }
  getCategory(){
    return this.http.get(this._api+'get_category_api.php');
  }

  getItemUpdate(id : any){
    // let param = new HttpParams();
    // param = param.append('id',id);
    // return this.http.get(this._api+'get_item_api.php',{params : param });
    const data = {id : id};
    return this.http.post(this._api+'get_item_api.php',data);
  }

  updateItem(data : any){
    return this.http.post(this._api+'update_item_api.php',data);
  }

  deleteItem(id : any){
    const data = {id : id};
    return this.http.post(this._api+'delete_item_api.php',data);
  }
  

}
