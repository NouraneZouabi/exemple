import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  [x: string]: any;

  constructor(private http : HttpClient) { }

  public getPlat(){
    return this.http.get(this.host+"/plat");
  }


 readonly API_URL = 'http://localhost:8080';
 public host:string = "http://localhost:8080";


 getAllPlat() {
   return this.http.get(`${this.API_URL}/plat`)
 }

deletePlat(id : any){
   return  this.http.delete(`${this.API_URL}/plat/DeleteP/${id}`)
 }

 addPlat(plat: object, id: number) {
  console.log("add");
  const URL = `${this.API_URL}/plat/addPlat/${id}`
  return this.http.post(URL, plat)
}

}
