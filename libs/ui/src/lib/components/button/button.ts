import { CommonModule } from "@angular/common";
import { Component, HostBinding, input } from "@angular/core";
import { NgpButton } from "ng-primitives/button";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 transition-colors",
  variants: {
    colors: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow",
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
      xs: "",
      sm: "",
      md: "h-9 px-4 py-2",
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
    //{ directive: NgpButton }
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