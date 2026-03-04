import { CommonModule } from "@angular/common";
import { Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { tv } from "tailwind-variants";
import { CaseContext } from "~cases/context/cases.context";

const classes = tv({
  base: 'absolute top-0 left-0 w-full h-full max-w-screen max-h-screen flex flex-row px-[20px] pt-[30px] pb-[50px]',
});

@Component({
  selector: 'app-case-layout',
  template: `
    <ng-content/>
    <router-outlet/>
  `,
  imports: [CommonModule, RouterOutlet],
  providers: [CaseContext]
})
export class CaseLayout { 
  
  @HostBinding('class')
  get klass() {
    return classes();
  }
}