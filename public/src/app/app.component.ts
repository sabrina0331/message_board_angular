import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

import { ValidateService } from '../app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  messages: any;
  newMsg: any;
  commentCreater: any;
  message: any=[];

  

constructor(private _httpService: HttpService, private validateService: ValidateService){

 //private flashMessage: FlashMessagesService
  
}

ngOnInit(){
  this.newMsg = {poster:"", post:""}
  this.showAllMsgs()
}

showAllMsgs(){
  let allMSG = this._httpService.getAllMsgs();
  allMSG.subscribe(data=>{
    this.messages = data;

  })
    
}
createMessage(){
  let addMsg = this._httpService.addMessage(this.newMsg)
  addMsg.subscribe(data=>{
    this.newMsg = {poster:"", post:""}
  
    // if(!this.validateService.validateMessage(addMsg)){
    //   // this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger',timeout:3000});
    //   return false;
    // }
  })
  this.showAllMsgs();
}
createComment(id,commentform){
  let comment = {
    commentCreater: commentform.controls['commentCreater']['value'],
    comment: commentform.controls['comment']['value'],
  }
  // if(!this.validateService.validateComment(comment)){
  //   this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-danger',timeout:3000});
  //   return false;
  // }
  this._httpService.addComment(id,comment).subscribe(data=>{})
  this.showAllMsgs();
  }
}