import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { ButtonVariants } from './dtypes/button.dtypes';
import { styles } from './styles/button.styles';


/**
 * Buttons allow users to take actions, and make choices, with a single tap. They are typically used for actions in dialogs, forms, cards, and toolbars.
 * 
 * {@link https://m3.material.io/components/buttons/specs}
 */
@Component({
  selector: 'ui-button',
  imports: [CommonModule, NgpButton],
  template: `
    <button 
        ngpButton 
        role="button"
        [attr.data-only-icon]=[isOnlyIcon]
        [attr.data-size]=[_size]
        [attr.data-variant]=[_variant]
        [attr.data-shape]=[_shape]
        [class]="styles()" 
        [disabled]="disabled" 
        (click)="_onClick($event)" 
        (focus)="_onFocus($event)" 
        (blur)="_onBlur($event)"
      >
        <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
        <ng-content select="[slot=leading]"/>
        <ng-content />
        <ng-content select="[slot=trailing]"/>
    </button>
  `,
})
export class Button {

  @Input() size: ButtonVariants['sizes'];

  @Input() variant: ButtonVariants['variants'];

  @Input() shapes: ButtonVariants['shapes'];

  @Input() disabled = false;

  @Output() btnClick = new EventEmitter<Event>();

  @Output() btnFocus = new EventEmitter<FocusEvent>();

  @Output() btnBlur = new EventEmitter<Event>();

  public styles = computed(() =>
    styles({ sizes: this.size, variants: this.variant, shapes: this.shapes }),
  );

  public _onClick(event: Event) {
    this.btnClick.emit(event);
  }

  public _onFocus(event: FocusEvent) {
    this.btnFocus.emit(event);
  }

  public _onBlur(event: Event) {
    this.btnBlur.emit(event);
  }

  get _variant() {
    return this.variant;
  }

  get _shape() {
    return this.shapes;
  }

  get _size() {
    return this.size;
  }

  get isOnlyIcon() {
    return this.size?.includes('icon');
  }

}