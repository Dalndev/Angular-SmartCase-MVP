import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-case-layout',
  template: `
    <ng-content/>
    <router-outlet/>
  `,
  imports: [CommonModule, RouterOutlet]
})
export class CaseLayout { }