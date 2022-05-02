import { Component } from '@angular/core';

@Component({
  selector: 'about-entry',
  template: `<div class="remote-entry">
    <h2>
      Monorepo: somamission
      App: about
    </h2>
    <p>
      Using Docker to orchestrate build and deployments, we can build from any
      nx monorepo 😎.
    </p>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
