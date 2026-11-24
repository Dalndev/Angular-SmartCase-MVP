import { CommonModule } from "@angular/common";
import { Component, HostBinding } from "@angular/core";
import { FeatCaseEdition } from "@smartcase/presentation/packages/cases/features";
import { tv } from "tailwind-variants";

const classes = tv({
  base: 'flex-initial w-full h-full max-h-[calc(100%-60px)] flex flex-row gap-[8px]',
});

@Component({
  selector: 'app-case-management',
  template: `<app-case-edition/>`,
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