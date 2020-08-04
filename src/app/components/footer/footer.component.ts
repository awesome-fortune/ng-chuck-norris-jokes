import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() companyName: string;

  get currentYear(): string {
    return new Date().getFullYear().toString();
  }

  constructor() {}

  ngOnInit(): void {}
}
