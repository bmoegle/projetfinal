import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "../../environnements/environment";
import { HttpClient } from "@angular/common/http";
import { Compte } from "../model";



@Injectable({
    providedIn: 'root'
  })

export class CompteService {
    constructor(private http: HttpClient) { }

    findAll(): Observable<Compte[]> {
      return this.http.get<Compte[]>(environment.apiUrl + "/compte");
    }
    findIA(): Observable<Compte> {
      return this.http.get<Compte>(environment.apiUrl + "/compte/IA");
    }
  
    findById(id?: number): Observable<Compte> {
      return this.http.get<Compte>(environment.apiUrl + "/compte/"+id);
    }
  
    save(compte: Compte): Observable<Compte>{
      if(compte.type == "admin")
      {
        if(compte.id) {
          return this.http.put<Compte>(environment.apiUrl + "/compte/admin/"+compte.id, compte);
          
        }
    
        return this.http.post<Compte>(environment.apiUrl + "/compte/admin", compte);
      }
    
      if(compte.type == "ia")
      {
        if(compte.id) {
          return this.http.put<Compte>(environment.apiUrl + "/compte/ia/"+compte.id, compte);
        }
    
        return this.http.post<Compte>(environment.apiUrl + "/compte/ia", compte);
      }
      else {

        if(compte.id) {
          return this.http.put<Compte>(environment.apiUrl + "/compte/humain/"+compte.id, compte);
        }
    
        return this.http.post<Compte>(environment.apiUrl + "/compte/humain", compte);
      }


      }
   

  
    delete(id?: number): Observable<void> {
      return this.http.delete<void>(environment.apiUrl + "/compte/"+id);
    }

}