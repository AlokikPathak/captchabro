import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleNotificationSidenav = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Purpose: Performs action when App Logo is Clicked
   * @returns void
   */
  viewHome(): void {
    console.log("Navigate to home page");
  }
}
