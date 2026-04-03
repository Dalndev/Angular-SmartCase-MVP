/* eslint-disable @angular-eslint/no-input-rename */
import { CommonModule } from "@angular/common";
import { Component, computed, HostBinding, Input } from "@angular/core";
import { cn, tv, VariantProps } from "tailwind-variants";
import { NgpFormField, NgpLabel, NgpDescription, NgpError, provideFormFieldState } from "ng-primitives/form-field";
import { NgpInput } from "ng-primitives/input";

const styles = tv({
  base: "",
  variants: {
    variant: {
      "filled": 
        "",
      "outlined": 
        ""
    },
    input: {
      email: "",
      tel: "",
      input: ""
    }
  },
  slots: {
    "field": 
      "group/field flex flex-col *:w-full relative h-[56px]",
    "fieldLabel": 
      "text-body-small left-auto right-auto absolute origin-top-left -translate-y-1/2",
    "fieldDescription": 
      "border-none bg-none p-0",
    "fieldInput":
      "h-auto",
    "fieldError": 
      ""
  }
});

const { 
  field, 
  fieldLabel, 
  fieldDescription,
  fieldInput,
  fieldError 
} = styles();

type Variants = VariantProps<typeof styles>;

@Component({
  selector: 'ui-field',
  template: `
    <ng-content/>`,
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpFormField }],
  host: {
    "role": "group"
  }
})
export class Field { 

  @Input({ alias: 'class' }) clazz: string | undefined;

  @Input() variant: Variants["variant"] | undefined; 

  @HostBinding('class')
  get klass() {
    return cn(field({ variant: this.variant }), this.clazz);
  }
}

@Component({
  selector: 'ui-field-label',
  template: `
    <label 
      ngpLabel
      [htmlFor]="htmlFor"
      [class]="klass()" 
    >
      <ng-content/>
    </label>
  `,
  imports: [CommonModule, NgpLabel],
  providers: [provideFormFieldState()]
})
export class FieldLabel { 

  @Input() variant: Variants["variant"] | undefined;

  @Input() htmlFor!: string;

  public klass = computed(() => cn(fieldLabel({ variant: this.variant }))) 

}

@Component({
  selector: 'ui-field-description',
  template: `<ng-content/>`,
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpDescription }]
})
export class FieldDescription { 

  @Input({ alias: 'class' }) clazz: string | undefined;

  @Input() variant: Variants["variant"] | undefined; 

  @HostBinding('class')
  get klass() {
    return cn(fieldDescription({ variant: this.variant }), this.clazz);
  }
}

@Component({
  selector: 'ui-field-content',
  template: `
    <div class="inline-flex align-baseline w-full">
      <div class="pb-[8px] pt-[24px] relative flex-auto min-w-0 w-[180px]">
        <ng-content/>       
      </div>
    </div>
  `,
  imports: [CommonModule]
})
export class FieldContent { }

@Component({
  selector: 'input[ui-field-input]',
  template: '',
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpInput }],
})
export class FieldInput { 

  @Input() variant: Variants["variant"] = "filled";

  @Input() input: Variants["input"];

  @HostBinding('class')
  get klass() {
    return cn(fieldInput({ variant: this.variant, input: this.input }))
  }

}

@Component({
  selector: 'ui-field-error',
  template: `<ng-content/>`,
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpError }]
})
export class FieldError { 

  @Input({ alias: 'class' }) clazz: string | undefined;

  @Input() variant: Variants["variant"] | undefined; 

  @HostBinding('class')
  get klass() {
    return cn(fieldError({ variant: this.variant }), this.clazz);
  }
}
