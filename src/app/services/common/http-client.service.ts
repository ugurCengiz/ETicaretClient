import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http" 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) { }

  private url(requestParamaters:Partial<RequestParameters>):string{
  return `${requestParamaters.baseUrl ? requestParamaters.baseUrl:this.baseUrl}/${requestParamaters.controller}`
  }

  get<T>(requestParamaters:Partial<RequestParameters>,id?:string):Observable<T>{
    let url:string="";
    if(requestParamaters.fullEndPoint){
      url = requestParamaters.fullEndPoint;
    }
    else{
    url = `${this.url(requestParamaters)}${id? `/${id}`:""}`
    }
   return this.httpClient.get<T>(url,{headers:requestParamaters.headers})


  }

  post<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}`

    return this.httpClient.post<T>(url, body, { headers: requestParameter.headers });
  }

  put<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}`;

    return this.httpClient.put<T>(url, body, { headers: requestParameter.headers });
  }


  delete<T>(requestParameter: Partial<RequestParameters>,id:string):Observable<T>{
  let url:string ="";
  if (requestParameter.fullEndPoint)
  url = requestParameter.fullEndPoint;
  else
  url = `${this.url(requestParameter)}/${id}`;

  return this.httpClient.delete<T>(url,{headers:requestParameter.headers})


  }

}

export class RequestParameters{
  controller?:string;
  action?:String;

  headers?:HttpHeaders;
  baseUrl?:string;

  fullEndPoint?:string
}