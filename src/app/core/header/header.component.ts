import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleNotificationSidenav = new EventEmitter<void>();


  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Purpose: Performs action when App Logo is Clicked
   * @returns void
   */
  viewHome(): void {
    console.log("Navigate to home page");
    this._router.navigate([""]);
  }
}
