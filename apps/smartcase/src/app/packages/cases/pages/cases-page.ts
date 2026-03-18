import { CommonModule } from "@angular/common";
import { Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { tv } from "tailwind-variants";
import { CaseContext } from "~cases/context/cases.context";
import { CaseList } from "~cases/features/feat-cases-list/feat-cases-list";

const classes = tv({
  base: 'absolute top-0 left-0 w-full h-full max-w-screen max-h-screen flex flex-row items-center justify-between gap-[20px] px-[20px] pt-[30px] pb-[50px]',
});

@Component({
  selector: 'app-cases-page',
  template: `
    <app-case-list class="w-max h-full flex-initial"/>
    <div class="h-full flex-1 p-[20px] rounded-[20px] bg-surface-container-high">
      <router-outlet/>
    </div>
  `,
  imports: [CommonModule, RouterOutlet, CaseList],
  providers: [CaseContext]
})
export class CasePage {

  @HostBinding('class')
  get klass() {
    return classes();
  }
}