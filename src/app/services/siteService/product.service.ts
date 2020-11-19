import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpContentTypeHeaderWithToken } from 'src/app/core/header.options';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient){}

  loadProduct(index, count): Observable<any> {
    return this.http.get(environment.api_url + `/${index}/${count}`, httpContentTypeHeaderWithToken());

  }
 
}