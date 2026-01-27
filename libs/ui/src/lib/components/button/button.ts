import { CommonModule } from '@angular/common';
import { Component, computed, HostBinding, Input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

const classes = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap text-base py-0 font-roboto font-medium',
  variants: {
    variants: {
      elevated: 'bg-surface-container-low text-primary',
      filled: 'bg-primary text-on-primary',
      tonal: 'bg-secondary-container text-on-secondary-container',
      outlined: 'border border-outline text-on-surface-variant',
      text: 'text-primary',
      danger: 'bg-error-container text-on-error-container',
    },
    sizes: {
      xs: 'h-[32px] px-[12px] text-[14px]',
      sm: 'h-[40px] px-[16px] text-[14px]',
      md: 'h-[56px] px-[24px] text-[16px]',
      lg: 'h-[96px] px-[48px] text-[24px]',
      xl: 'h-[136px] px-[64px] text-[32px]',
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
    { sizes: 'md', shapes: 'squared', class: 'rounded-[16px]' },
    { sizes: 'lg', shapes: 'squared', class: 'rounded-[28px]' },
    { sizes: 'xl', shapes: 'squared', class: 'rounded-[28px]' },
    { variants: 'elevated', sizes: 'xs', class: 'shadow-elevation-light-lowest' },
    { variants: 'elevated', sizes: 'sm', class: 'shadow-elevation-light-lowest' },
    { variants: 'elevated', sizes: 'md', class: 'shadow-elevation-light-low' },
    { variants: 'elevated', sizes: 'lg', class: 'shadow-elevation-light-medium' },
    { variants: 'elevated', sizes: 'xl', class: 'shadow-elevation-light-medium' },
    { variants: 'outlined', sizes: 'lg', class: 'border-2' },
    { variants: 'outlined', sizes: 'xl', class: 'border-2' },
  ],
});

@Component({
  selector: 'ui-button',
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpButton }],
  host: {
    role: 'button',
    '[attr.data-size]': 'size',
    '[attr.data-variant]': 'variant',
    '[attr.data-shape]': 'shapes',
  },
  template: `<ng-content />`,
})
export class Button {
  @Input() size: ButtonVariants['sizes'];

  @Input() variant: ButtonVariants['variants'];

  @Input() shapes: ButtonVariants['shapes']; 

  public klass = computed(() =>
    classes({ sizes: this.size, variants: this.variant, shapes: this.shapes }),
  );

  @HostBinding('class')
  get buildClasses() {
    return this.klass();
  }
}

export type ButtonVariants = VariantProps<typeof classes>;
