import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { ButtonVariants } from './dtypes/button.dtypes';
import { styles } from './styles/button.styles';

/**
 * @author Dalndev
 * 
 * @description Buttons allow users to take actions, and make choices, with a single tap.
 * 
 * @see {@link https://m3.material.io/components/buttons/specs | Material Design - Button}
 * @see {@link https://angularprimitives.com/primitives/button | Angular Primitives - Button}
 * @see {@link https://www.shadcn.io/ui/button | Shadcn - Button}
 */
@Component({
  selector: 'ui-button',
  imports: [CommonModule, NgpButton],
  template: `
    <button 
        ngpButton 
        role="button"
        [attr.data-only-icon]=[isOnlyIcon]
        [attr.data-size]=[size]
        [attr.data-variant]=[variant]
        [attr.data-shape]=[shape]
        [class]="styles()" 
        [disabled]="disabled" 
        (click)="onClick($event)" 
        (focus)="onFocus($event)" 
        (blur)="onBlur($event)"
      >
        <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
        <ng-content select="[slot=leading]"/>
        <ng-content />
        <ng-content select="[slot=trailing]"/>
    </button>
  `,
})
export class Button {

  @Input() size: ButtonVariants['size'];

  @Input() variant: ButtonVariants['variant'];

  @Input() shape: ButtonVariants['shape'];

  @Input() disabled = false;

  @Output() btnClick = new EventEmitter<Event>();

  @Output() btnFocus = new EventEmitter<FocusEvent>();

  @Output() btnBlur = new EventEmitter<Event>();

  public styles = computed(() =>
    styles({ sizes: this.size, variants: this.variant, shapes: this.shape }),
  );

  public onClick(event: Event) {
    this.btnClick.emit(event);
  }

  public onFocus(event: FocusEvent) {
    this.btnFocus.emit(event);
  }

  public onBlur(event: Event) {
    this.btnBlur.emit(event);
  }

  get isOnlyIcon() {
    return this.size?.includes('icon');
  }

}