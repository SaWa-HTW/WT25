import { Injectable } from '@angular/core';
import { Member } from './models/members';
@Injectable({
  providedIn: 'root'
})
export class Members {

  constructor() { }

  async getMembers():Promise<Members[]> {
    let response = await fetch('./assets/members.json')
    let members = await response.json()
    console.log('members',members)
    return members;
  }
}
