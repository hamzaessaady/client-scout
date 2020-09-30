import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalBalanceOwed: number;

  constructor() { }

  ngOnInit(): void {
  }

  onTotalBalance(totalBalanceOwed: number){
    this.totalBalanceOwed = totalBalanceOwed;
  }

}
