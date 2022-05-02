import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'somamission-header',
  template: `
    <div class="grid">
      <div class="text-center w-full text-l bg-gray-300">
        UNDER CONSTRUCTION
      </div>
      <div class="grid grid-cols-2 px-2 bg-gray-100">
        <div class="flex">
          <div class="w-24">
            <img
              class="h-24 p-2 rounded-full"
              src="http://placekitten.com/150/150"
            />
          </div>
          <div class="grid flex-grow">
            <div class="self-end text-xl">NX 14 MFE Demo</div>
            <div class="self-start text-xs">A cool new app</div>
          </div>
        </div>
        <div class="grid">
          <div class="grid grid-cols-3 justify-self-end self-end gap-4 h-12">
            <input
              class="h-full ring-2 ring-gray-200 p-4"
              type="text"
              placeholder="username"
            />
            <input
              class="h-full ring-2 ring-gray-200 p-4"
              type="text"
              placeholder="password"
            />
            <span>
              <button
                class="h-full bg-gray-200 w-48 rounded-sm border-solid border-1 border-gray-500 border-opacity-70"
              >
                Log In
              </button>
            </span>
          </div>
          <div class="justify-self-end self-center px-2 mt-2 w-60">
            <p class="text-xs">
              Don't have an account?
              <a class="text-blue-500" href="http://google.com/"> Sign up </a>
            </p>
          </div>
        </div>
      </div>
      <somamission-nav-tabs></somamission-nav-tabs>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
