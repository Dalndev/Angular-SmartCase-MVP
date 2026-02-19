import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { tv, VariantProps } from "tailwind-variants";

const classes = tv({
  base:
    'w-max min-h-[32px] max-h-[32px] px-[16px] rounded-[8px] text-[18px] [--ng-icon__size:18px] has-[[slot="leading"]]:pl-[0px] [&>[slot="leading"]]:mx-[8px] has-[[slot="trailing"]]:pr-[0px] [&>[slot="trailing"]]:mx-[8px] font-medium inline-flex justify-center items-center whitespace-nowrap shrink-0 overflow-hidden transition-all select-none pointer-events-none',
  variants: {
    variant: {
      primary: "bg-primary-container text-on-primary-container",
      secondary: "bg-secondary-container text-on-secondary-container",
      outline: "border border-outline-variant text-on-surface-variant"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

export type TagVariants = VariantProps<typeof classes>;

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
    role: "status"
  }
})
export class Tag {

  @Input() variant: TagVariants["variant"];

  @HostBinding('class')
  get klass() {
    return classes({ variant: this.variant });
  }

}