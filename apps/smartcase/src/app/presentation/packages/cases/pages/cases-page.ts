import { CommonModule } from "@angular/common";
import { Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { tv } from "tailwind-variants";
import { CaseList } from "@smartcase/presentation/packages/cases/features";
import { CaseContext } from "@smartcase/presentation/packages/cases/context";

const classes = tv({
  base: 'w-full h-full flex flex-row gap-[8px]',
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