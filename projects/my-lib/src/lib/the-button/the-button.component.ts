import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ml-the-button',
  templateUrl: './the-button.component.html',
  styleUrls: ['./the-button.component.less']
})
export class TheButtonComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
