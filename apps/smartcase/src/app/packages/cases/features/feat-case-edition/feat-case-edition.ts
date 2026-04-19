import { Component, HostBinding } from "@angular/core";
import { NgpSelectPortal } from "ng-primitives/select";
import { tv } from "tailwind-variants";
import { Field, FieldLabel, Input, Select, SelectValue, SelectContent, SelectItem } from "~ui";

const classes = tv({
  base: 'flex-1 py-[40px] px-[24px] flex flex-col items-start',
});

@Component({
  selector: "app-case-edition",
  templateUrl: "./feat-case-edition.html",
  imports: [
    Field,
    FieldLabel,
    Input,
    Select,
    SelectValue,
    SelectContent,
    SelectItem,
    NgpSelectPortal,
]
})
export class FeatCaseEdition {

  @HostBinding('class')
  get klass() {
    return classes();
  }

}