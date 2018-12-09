import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getAllMsgs(){
    return this._http.get('/allMsgs')
  }

  addMessage(newMsg){
    return this._http.post('/addMsgs',newMsg)
  }
  addComment(id,commentCreater){
    return this._http.post('/addComm/'+id,commentCreater)
  }
}
