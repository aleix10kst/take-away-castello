import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tac-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickForm(): void {
    window.open('https://forms.gle/nZPFSxKc8cZW2RPi8', 'new');
  }

}
