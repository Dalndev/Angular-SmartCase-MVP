import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

const classes = tv({
  base: 'py-0 relative inline-flex items-center justify-center whitespace-nowrap text-base font-roboto font-medium transition-colors overflow-hidden',
  variants: {
    variants: {
      elevated: 'bg-surface-container-low text-primary data-hover:[&>span]:bg-primary-state-layer-light-low data-press:[&>span]:bg-primary-state-layer-light',
      filled: 'bg-primary text-on-primary data-hover:[&>span]:bg-on-primary-state-layer-light-low',
      tonal: 'bg-secondary-container text-on-secondary-container data-hover:[&>span]:bg-on-secondary-container-state-layer-light-low',
      outlined: 'border border-outline text-on-surface-variant border-outline-variant data-hover:[&>span]:bg-on-surface-variant-state-layer-light-low data-press:[&>span]:bg-on-surface-variant-state-layer-light',
      text: 'text-primary data-hover:[&>span]:bg-primary-state-layer-light-low',
      danger: 'bg-error-container text-on-error-container data-hover:[&>span]:bg-on-error-container-state-layer-light-low',
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
  imports: [CommonModule, NgpButton],
  template: `
    <button ngpButton role="button" [class]="klass()">
      <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
      <ng-content />
    </button>
  `,
})
export class Button {
  @Input() size: ButtonVariants['sizes'];

  @Input() variant: ButtonVariants['variants'];

  @Input() shapes: ButtonVariants['shapes'];

  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  @Output() onFocus = new EventEmitter<FocusEvent>();

  @Output() onBlur = new EventEmitter<Event>();

  public klass = computed(() =>
    classes({ sizes: this.size, variants: this.variant, shapes: this.shapes }),
  );

  public _onClick(event: Event) {
    this.onClick.emit(event);
  }

  public _onFocus(event: FocusEvent) {
    this.onFocus.emit(event);
  }

  public _onBlur(event: Event) {
    this.onBlur.emit(event);
  }
}

export type ButtonVariants = VariantProps<typeof classes>;
