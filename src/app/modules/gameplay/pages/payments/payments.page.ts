import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss']
})
export class PaymentsPage implements OnInit {

  amount: number=0;

  paymentList = 
    [
      {
        to: "Paid to Rajesh Kumar", timestamp: "9:30 AM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to SONU  Kumar", timestamp: "19:30 AM, 11 April, 2020", from: "State Bank Of India", transactionId: "qeqdasfgad321423daf", 
        amount: "7500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to KARAN Kumar", timestamp: "08:30 AM, 11 April, 2020", from: "YES Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "5100", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to Rakesh Kumar", timestamp: "10:30 PM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "800", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to Rajesh Kumar", timestamp: "9:30 AM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "8100", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to Rajesh Kumar", timestamp: "9:30 AM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "9300", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
