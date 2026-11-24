import { Component, HostBinding } from "@angular/core";
import { NgpSelectPortal } from "ng-primitives/select";
import { tv } from "tailwind-variants";
import { Field, FieldLabel, Input, Select, SelectValue, SelectContent, SelectItem, TextArea } from "@smartcase/ui";

const classes = tv({
  base: 'w-[50%] h-[50%] flex-initial flex flex-col items-start',
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
    TextArea,
    NgpSelectPortal,
]
})
export class FeatCaseEdition {

  @HostBinding('class')
  get klass() {
    return classes();
  }

}