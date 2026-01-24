import { CommonModule } from "@angular/common";
import { Component, HostBinding, input } from "@angular/core";
import { NgpButton } from "ng-primitives/button";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center",
  variants: {
    variants: {
      elevated: "",
      filled: "",
      tonal: "",
      outlined: "",
      text: ""
    },
    sizes: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: ""
    }
  },
  defaultVariants: {
    sizes: "md",
  }
});

@Component({
  imports: [CommonModule],
  selector: 'smc-button',
  hostDirectives: [
    {
      directive: NgpButton
    }
  ],
  host: {
    'role': 'button',
    '[attr.data-size]': 'size()',
  },
  template: `
    <ng-content />
  `,
})
export class Button {

  readonly size = input<ButtonVariants['sizes']>();

  readonly variant = input<ButtonVariants['variants']>();

  @HostBinding('class')
  get buildClasses() {
    return button({ sizes: this.size(), variants: this.variant() })
  }

}

export type ButtonVariants = VariantProps<typeof button>;