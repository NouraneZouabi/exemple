import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plat } from '../models/plat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  public getPlat() {
    return this.http.get(this.host + "/plat");
  }


  readonly API_URL = 'http://localhost:8080';
  public host: string = "http://localhost:8080";


  getAllPlat() {
    return this.http.get<plat[]>(`${this.API_URL}/plat`)
  }

  deletePlat(id: any) {
    return this.http.delete(`${this.API_URL}/plat/DeleteP/${id}`)
  }

  addPlat(plat: object) {
    console.log("add");
    const URL = `${this.API_URL}/plat/addPlat`
    return this.http.post(URL, plat)
  }

  updatePlat(plat: plat, id: number) {
    console.log("add");
    const URL = `${this.API_URL}/plat/UpdatePlat/${id}`
    return this.http.put(URL, plat)
  }

  public getPlatById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/plat/getPlat/${id}`)
  }

}
