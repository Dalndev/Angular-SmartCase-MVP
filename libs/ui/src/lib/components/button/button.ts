import { CommonModule } from '@angular/common';
import { Component, computed, HostBinding, Input, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap text-base py-0',
  variants: {
    colors: {
      primary: '',
      secondary: '',
      danger: '',
    },
    variants: {
      elevated: 'bg-surface-container-low text-primary',
      filled: 'bg-primary text-on-primary',
      tonal: 'bg-secondary-container text-on-secondary-container',
      outlined: 'border-outline-variant',
      text: 'text-primary',
    },
    sizes: {
      xs: 'h-[32px] px-[12px] text-[11px]',
      sm: 'h-[40px] px-[16px] text-[11px]',
      md: 'h-[56px] px-[24px] text-[12px]',
      lg: 'h-[96px] px-[48px] text-[20px]',
      xl: 'h-[136px] px-[64px] text-[20px]',
    },
    shapes: {
      rounded: 'rounded-full',
      squared: 'rounded-[12px]',
    },
  },
  defaultVariants: {
    sizes: 'sm',
    colors: 'primary',
    variants: 'filled',
    shapes: 'rounded',
  },
  compoundVariants: [
    {
      sizes: 'md', shapes: 'squared',
      class: 'rounded-[16px]'
    },
    {
      sizes: "lg", shapes: "squared",
      class: "rounded-[28px]"
    },
    {
      sizes: "xl", shapes: "squared",
      class: "rounded-[28px]"
    }
  ]
});

@Component({
  selector: 'ui-button',
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpButton }],
  host: {
    role: 'button',
    '[attr.data-size]': 'size',
  },
  template: `<ng-content />`,
})
export class Button {
  @Input() size: ButtonVariants['sizes'];

  @Input() variant: ButtonVariants['variants'];

  @Input() shapes: ButtonVariants['shapes'];

  @Input() colors: ButtonVariants['colors'];


  public klass = computed(() =>
    button({ sizes: this.size, variants: this.variant, shapes: this.shapes, colors: this.colors }),
  );

  @HostBinding('class')
  get buildClasses() {
    return this.klass();
  }
}

export type ButtonVariants = VariantProps<typeof button>;
