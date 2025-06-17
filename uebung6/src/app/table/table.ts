import { Component, inject, OnInit } from '@angular/core';
import { Members } from '../members';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table implements OnInit {
  async ngOnInit(): Promise<void> {
    this.alleMembers=await this.dataservice.getMembers()
    console.log('alleMembers', this.alleMembers)
  }
  dataservice = inject(Members)
  alleMembers : Members[]=[]
}
