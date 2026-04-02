/* eslint-disable @angular-eslint/no-input-rename */
import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { cn, tv, VariantProps } from "tailwind-variants";
import { NgpFormField, NgpLabel, NgpDescription, NgpError } from "ng-primitives/form-field";

const styles = tv({
  base: "",
  variants: {
    variant: {
      "filled": 
        "",
      "outlined": 
        ""
    }
  },
  slots: {
    "field": 
      "",
    "fieldLabel": 
      "",
    "fieldDescription": 
      "",
    "fieldContent": 
      "",
    "fieldError": 
      ""
  }
});

const { 
  field, 
  fieldLabel, 
  fieldDescription, 
  fieldContent, 
  fieldError 
} = styles();

type Variants = VariantProps<typeof styles>;

@Component({
  selector: 'ui-field',
  template: `<ng-content/>`,
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpFormField }]
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
  template: `<ng-content/>`,
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpLabel }]
})
export class FieldLabel { 

  @Input() variant: Variants["variant"] | undefined;

  @HostBinding('class')
  get klass() {
    return cn(fieldLabel({ variant: this.variant}));
  }

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
  template: `<ng-content/>`,
  imports: [CommonModule]
})
export class FieldContent { 

  @Input({ alias: 'class' }) clazz: string | undefined;

  @Input() variant: Variants["variant"] | undefined; 

  @HostBinding('class')
  get klass() {
    return cn(fieldContent({ variant: this.variant }), this.clazz);
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
