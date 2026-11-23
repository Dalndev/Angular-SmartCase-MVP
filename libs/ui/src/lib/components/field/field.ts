/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-input-rename */

import { CommonModule } from "@angular/common";
import { Component, computed, Directive, input, Input } from "@angular/core";
import { cn } from "tailwind-variants";
import { NgpLabel, NgpDescription, NgpError } from "ng-primitives/form-field";
import { field, fieldLabel, fieldDescription, fieldError, fieldWrapper, fieldFlex } from "./styles/field.styles";
import { NgpSelect } from "ng-primitives/select";

/**
 * @todo ui. Implementar la variación "outline" del componente field/input en el sistema.
 * @todo ui. Implementar la variación "filled" del componente field/input en el sistema.
 */

/**
 * @author Dalndev
 * 
 * @description Let users enter text into a UI.
 * 
 * @see {@link https://m3.material.io/components/text-fields/overview | Material Design - Text Fields}
 * @see {@link https://angularprimitives.com/primitives/input | Material Design - Input}
 * @see {@link https://angularprimitives.com/primitives/select | Material Design - Select}
 * @see {@link https://www.shadcn.io/ui/input | Shadcn - Input}
 */
@Component({
  selector: 'ui-field',
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpSelect }],
  template: `
    <div 
      data-slot="field-wrapper" 
      class="box-border relative bg-surface-variant h-auto w-full px-[16px] flex-auto rounded-t-[4px] rounded-b-none"
    >
      <div data-slot="field-flex" class="box-border inline-flex align-baseline w-full">
        <div data-slot="field-infix" class="box-border relative pb-[8px] pt-[24px] flex-auto min-w-0 w-[180px] min-h-[56px]">
          <ng-content select="[slot=leading]"/>
          <ng-content/>
          <ng-content select="[ui-field-label]"/>
          <ng-content select="[slot=trailing]"/>
        </div>
      </div>
      <div data-slot="field-overlay" class="
        before:absolute before:left-0 before:bottom-0 before:w-full before:border-b before:border-on-surface-variant before:z-1
        after:absolute after:left-0 after:bottom-0 after:w-full after:border-b-2 after:border-primary after:z-2 after:opacity-0 after:scale-x-0 
        [ui-field:has(input[data-filled='true'])_&]:after:opacity-100 [ui-field:has(input[data-filled='true'])_&]:after:scale-x-100
        [ui-field:has(input:focus)_&]:after:opacity-100 [ui-field:has(input:focus)_&]:after:scale-x-100
        [ui-field[aria-expanded='true']_&]:after:opacity-100 [ui-field[aria-expanded='true']_&]:after:scale-x-100
        [ui-field:has(ui-select[data-filled='true'])_&]:after:opacity-100 [ui-field:has(ui-select[data-filled='true'])_&]:after:scale-x-100
        transition-all
      "></div>
    </div>
    <div 
      data-slot="field-subs-wrapper" 
      class="hidden box-border relative w-full text-body-small before:inline-block before:h-[16px]"
    >
      <div 
        data-slot="field-hint-wrapper" 
        class="absolute top-0 left-0 right-0 px-[16px] flex opacity-[1] translate-y-0 *:before:inline-block *:before:h-[16px]"
      >
        <ng-content select="[ui-field-error]"/>
        <ng-content select="[ui-field-description]"/>
        <div class="grow shrink-0 basis-[1em]"></div>
      </div>
    </div>
  `,
  host: {
    "role": "group",
    '[class]': 'formField()'
  }
})
export class Field {
  
  clazz = input<string>('', { alias: 'class' });

  protected formField = computed(() =>
    cn(field(), this.clazz())
  );

  get fieldWrapper() {
    return fieldWrapper()
  }

  get fieldFlex() {
    return fieldFlex(
      
    )
  }
}

@Directive({
  selector: 'label[ui-field-label]',
  hostDirectives: [{ directive: NgpLabel }],
  host: {
    '[htmlFor]': 'htmlFor',
    '[class]': 'styles',
    'data-slot': 'floating-label'
  }
})
export class FieldLabel {

  @Input() htmlFor!: string;

  get styles() {
    return cn(fieldLabel())
  }

}

@Directive({
  selector: '[ui-field-description]',
  hostDirectives: [{ directive: NgpDescription }],
  host: {
    '[class]': 'styles',
    'data-slot': ''
  }
})
export class FieldDescription {

  @Input({ alias: 'class' }) clazz: string | undefined;

  get styles() {
    return cn(fieldDescription(), this.clazz);
  }
}

@Directive({
  selector: '[ui-field-error]',
  hostDirectives: [{ directive: NgpError }],
  host: {
    '[class]': 'styles'
  }
})
export class FieldError {

  @Input({ alias: 'class' }) clazz: string | undefined;

  get styles() {
    return cn(fieldError(), this.clazz);
  }
}
