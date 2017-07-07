import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selected = '';
  items = [
    { text: 'Refresh', url: 'http://www.google.com' },
    { text: 'Settings', url: 'http://www.jjins.com' },
    { text: 'Help', disabled: true },
    { text: 'Sign Out', url: 'http://www.riverbluff.org' }
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications-off'}
  ];

  select(text: string) { this.selected = text; }

  constructor() { }

  ngOnInit() {
  }

}
