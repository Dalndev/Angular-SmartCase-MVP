import { CommonModule } from "@angular/common";
import { Component, HostBinding, input } from "@angular/core";
import { NgpButton } from "ng-primitives/button";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap radius-md text-sm font-medium",
  variants: {
    colors: {
      primary: "bg-primary text-on-primary",
      secondary: "",
      danger: ""
    },
    variants: {
      elevated: "",
      filled: "",
      tonal: "",
      outlined: "",
      text: ""
    },
    sizes: {
      xs: "h-8 px-3 rounded-full",
      sm: "h-10 px-4",
      md: "h-14 px-6 rounded-full",
      lg: "",
      xl: ""
    }
  },
  defaultVariants: {
    colors: "primary",
    variants: "elevated",
    sizes: "md",
  }
});

@Component({
  imports: [CommonModule],
  selector: 'smc-button',
  hostDirectives: [
    { directive: NgpButton }
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

  readonly label = input<string>();

  @HostBinding('class')
  get buildClasses() {
    return button({ sizes: this.size(), variants: this.variant() })
  }

}

export type ButtonVariants = VariantProps<typeof button>;