import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  pplans = [{name: 'Dedicated account managers to help you find and hire quality talent fast.'},
    {name: 'Tailored search results featuring Top Rated and Rising Talent'},
  ]

  plans = [
    { 
      title: "Basic", 
      action: "Select Basic", 
      fee: "Free*", 
      features: [ 
        {name: 'Dedicated account managers to help you find and hire quality talent fast.'},
        {name: 'Tailored search results featuring Top Rated and Rising Talent'},
      ]
   },
   { 
    title: "Plus", 
    action: "Select Plus", 
    fee: "$49.99/month", 
    features: [ 
      {name: 'Dedicated account managers to help you find and hire quality talent fast.'},
      {name: 'Consolidated billing and invoicing with net 30 pay'},
      {name: 'Tailored search results featuring Top Rated and Rising Talent'},
    ]
 },
  { 
    title: "Business", 
    action: "Contact Us", 
    fee: "$849/month**", 
    features: [ 
      {name: 'Dedicated account managers to help you find and hire quality talent fast.'},
      {name: 'Consolidated billing and invoicing with net 30 pay'},
      {name: 'Project tracking and collaboration tools for team'},
      {name: 'Tailored search results featuring Top Rated and Rising Talent'},
    ]
  },
  { 
    title: "Enterprise", 
    action: "Contact Us", 
    fee: "Price varies as per user", 
    features: [ 
      {name: 'Dedicated account managers to help you find and hire quality talent fast.'},
      {name: 'Consolidated billing and invoicing with net 30 pay'},
      {name: 'Project tracking and collaboration tools for team'},
      {name: 'Tailored search results featuring Top Rated and Rising Talent'},
    ]
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
