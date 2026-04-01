import { Component, HostBinding } from "@angular/core";
import { tv } from "tailwind-variants";

const classes = tv({
  base: 'flex-1 py-[40px] px-[24px] flex flex-col items-start',
});

@Component({
  selector: "app-case-edition",
  templateUrl: "./feat-case-edition.html",
})
export class FeatCaseEdition {

  @HostBinding('class')
  get klass() {
    return classes();
  }

}