import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'somamission-nav-tab',
  template: `
    <div
      [ngClass]="{
        'h-full': true,
        'p-2': true,
        'border-2': selected,
        'border-gray-200': selected,
        'bg-gray-300': selected
      }"
    >
      <a routerLink="/{{ path }}" (click)="selectTab(path)"><ng-content></ng-content></a>
    </div>
  `,
})
export class NavTabComponent {
  @Input() path!: string;
  @Input() selected: boolean;
  @Output() selectTabEvent = new EventEmitter<string>(); 

  constructor() {
    this.selected = false;
  }

  selectTab(path: string) {
    this.selectTabEvent.emit(path);
  }
}
