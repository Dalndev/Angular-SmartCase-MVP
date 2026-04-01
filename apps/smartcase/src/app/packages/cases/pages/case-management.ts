import { CommonModule } from "@angular/common";
import { Component, HostBinding } from "@angular/core";
import { FeatCaseEdition } from "~cases/features/feat-case-edition/feat-case-edition";
import { tv } from "tailwind-variants";

const classes = tv({
  base: 'absolute top-0 left-0 w-full h-full max-w-screen max-h-screen flex flex-row px-[20px] pt-[30px] pb-[50px] gap-[8px]',
});

@Component({
  selector: 'app-case-management',
  template: `
    <app-case-edition/>
  `,
  imports: [
    CommonModule,
    FeatCaseEdition
  ]
})
export class CaseManagement { 

  @HostBinding('class')
  get klass() {
    return classes();
  }

}