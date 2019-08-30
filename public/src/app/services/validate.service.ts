import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateMessage(addMsg) {
    if (addMsg.poster ===  undefined || addMsg.post === undefined) {
      return false;
    } else {
      return true;
    }
  }
  validateComment(comment) {
    if (comment.commentCreater === undefined || comment.comment === undefined) {
      return false;
    } else {
      return true;
    }
  }
}
