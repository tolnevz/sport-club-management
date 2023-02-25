import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() display!: boolean;
  @Output() sidebarToggleEvent = new EventEmitter<boolean>();

  constructor() {}

  toggleSidebar(value: boolean) {
    this.sidebarToggleEvent.emit(value);
  }

}
