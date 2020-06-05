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
        amount: "Rs. 500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to SONU  Kumar", timestamp: "19:30 AM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "Rs. 500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to KARAN Kumar", timestamp: "08:30 AM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "Rs. 500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to Rakesh Kumar", timestamp: "10:30 PM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "Rs. 500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to Rajesh Kumar", timestamp: "9:30 AM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "Rs. 500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
      {
        to: "Paid to Rajesh Kumar", timestamp: "9:30 AM, 11 April, 2020", from: "Axis Bank", transactionId: "qeqdasfgad321423daf", 
        amount: "Rs. 500", result:"SUCCESS", comments: "Transaction was successful. Booking ID: ADSLF324352SADFJSLXXXX234"
      },
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
