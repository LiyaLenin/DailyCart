import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../userModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL="http://localhost:3000"

  constructor(private http:HttpClient) { }
  getAllProductsAPI(){
   return this.http.get(`${this.SERVER_URL}/all-products`)
  }
  registerAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/register`,user)
 
  }
  loginAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/login`,user)

  }
}
