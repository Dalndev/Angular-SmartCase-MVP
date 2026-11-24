/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-input-rename */
import { CommonModule } from "@angular/common";
import { Component, computed, Directive, input, Input } from "@angular/core";
import { cn } from "tailwind-variants";
import { NgpLabel, NgpDescription, NgpError } from "ng-primitives/form-field";
import { 
  field, 
  floatingLabel, 
  fieldDescription, 
  fieldError, 
  fieldWrapper, 
  fieldFlex, 
  fieldOverlay, 
  fieldInfix, 
  fieldSubsWrapper, 
  fieldHintWrapper, 
  base
} from "./styles/field.styles";
import { Variants } from "./dtypes/field.dtypes";

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
  template: `
    <div data-slot="field-wrapper" [class]="fieldWrapper">
      <div data-slot="field-flex" [class]="fieldFlex">
        <div data-slot="field-infix" [class]="fieldInfix">
          <ng-content select="[slot=leading]"/>
          <ng-content/>
          <ng-content select="[ui-field-label]"/>
          <ng-content select="[slot=trailing]"/>
        </div>
      </div>
      <div data-slot="field-overlay" [class]="fieldOverlay"></div>
    </div>
    <div data-slot="field-subs-wrapper" [class]="fieldSubsWrapper">
      <div data-slot="field-hint-wrapper" [class]="fieldHintWrapper">
        <ng-content select="[ui-field-error]"/>
        <ng-content select="[ui-field-description]"/>
        <div class="grow shrink-0 basis-[1em]"></div>
      </div>
    </div>
  `,
  host: {
    "role": "group",
    '[class]': 'styles()',
    '[attr.data-input]': 'input',
  }
})
export class Field {
  @Input() input: Variants['input'] = 'text';
  
  public clazz = input<string>('', { alias: 'class' });

  protected styles = computed(() =>
    cn(this.clazz(), field(), base({ input: this.input }))
  );

  get fieldWrapper() {
    return fieldWrapper()
  }

  get fieldFlex() {
    return fieldFlex()
  }

  get fieldInfix() {
    return fieldInfix()
  }

  get fieldOverlay() {
    return fieldOverlay()
  }

  get fieldSubsWrapper() {
    return fieldSubsWrapper()
  }

  get fieldHintWrapper() {
    return fieldHintWrapper()
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
    return cn(floatingLabel())
  }

}

@Directive({
  selector: '[ui-field-description]',
  hostDirectives: [{ directive: NgpDescription }],
  host: {
    '[class]': 'styles',
    'data-slot': 'field-hint'
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
    '[class]': 'styles',
    'data-slot': 'field-error'
  }
})
export class FieldError {

  @Input({ alias: 'class' }) clazz: string | undefined;

  get styles() {
    return cn(fieldError(), this.clazz);
  }
}
