import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TagVariants } from "./dtypes/tag.dtypes";
import { styles } from "./styles/tag.styles";

@Component({
  selector: 'ui-tag',
  imports: [
    CommonModule
  ],
  template: `
    <ng-content select="[slot=leading]"/>
    <ng-content/>
    <ng-content select="[slot=trailing]"/>
  `,
  host: {
    role: "status",
    "[class]": "styles"
  }
})
export class Tag {

  @Input() variant: TagVariants["variant"];

  get styles() {
    return styles({ variant: this.variant });
  }

}