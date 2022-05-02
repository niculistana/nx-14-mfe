import { Component } from "@angular/core";

@Component({
  selector: 'somamission-nav-tabs',
  template: `
    <div class="grid grid-cols-12 px-2">
      <somamission-nav-tab
        path="about"
        [selected]="this.selectedTab === 'about'"
        (selectTabEvent)="selectTab($event)"
        >About</somamission-nav-tab
      >
      <somamission-nav-tab
        [selected]="this.selectedTab === 'catalog'"
        path="catalog"
        (selectTabEvent)="selectTab($event)"
        >Catalog</somamission-nav-tab
      >
    </div>
  `,
})
export class NavTabsComponent {
  selectedTab: string;

  constructor() {
    this.selectedTab = 'about';
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
