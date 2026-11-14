import { CommonModule } from "@angular/common";
import { Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { tv } from "tailwind-variants";
import { CaseContext } from "~cases/context/cases.context";
import { CaseList } from "~cases/features/feat-cases-list/feat-cases-list";

const classes = tv({
  base: 'absolute top-0 left-0 w-full h-full max-w-screen max-h-screen flex flex-row px-[20px] pt-[30px] pb-[50px] gap-[8px]',
});

@Component({
  selector: 'app-cases-page',
  template: `
    <app-case-list/>
    <div class="p-[20px] flex-1 bg-surface-container-high rounded-[20px]">
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