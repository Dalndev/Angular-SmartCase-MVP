/* eslint-disable @angular-eslint/no-input-rename */
import { CommonModule } from "@angular/common";
import { Component, computed, ElementRef, HostBinding, HostListener, inject, Input, signal } from "@angular/core";
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
    type: {
      email: "",
      tel: "",
      input: ""
    }
  },
  slots: {
    field:
      "relative flex flex-col group/field *:w-full",
    fieldLabel: 
      "absolute top-1/2 left-0 origin-top-left -translate-y-1/2 pointer-events-auto transition-all"
     +" text-start font-medium text-body-large text-on-surface-variant text-ellipsis whitespace-nowrap overflow-hidden"
     +" peer-focus:-translate-y-full peer-focus:scale-75 peer-focus:text-primary"
     +" peer-data-[filled=true]:-translate-y-full peer-data-[filled=true]:scale-75 peer-data-[filled=true]:text-primary"
    ,
    fieldInput:
      "h-auto text-on-surface-variant caret-primary outline-none border-none rounded-none p-0 bg-none w-full min-w-0 "
      +" peer"   
    ,
    fieldDescription:
      "border-none bg-none p-0",
    fieldError:
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
      <div class="bg-surface-variant h-auto w-full px-[16px] flex-auto w-full h-auto rounded-t-[4px] rounded-b-none">
        <div class="inline-flex align-baseline w-full">
          <div class="box-border relative pb-[8px] pt-[24px] flex-auto min-w-0 w-[180px] min-h-[56px]">
            <ng-content select="[slot=leading]"/>
            <ng-content/>       
            <ng-content select="[slot=trailing]"/>
          </div>
        </div>
        <span class="
          before:absolute before:left-0 before:bottom-0 before:w-full before:border-b before:border-on-surface-variant before:z-1
          after:absolute after:left-0 after:bottom-0 after:w-full after:border-b-2 after:border-primary after:z-2 after:opacity-0 after:scale-x-0 
          [ui-field:has(input[data-filled='true'])_&]:after:opacity-100 [ui-field:has(input[data-filled='true'])_&]:after:scale-x-100
          [ui-field:has(input:focus)_&]:after:opacity-100 [ui-field:has(input:focus)_&]:after:scale-x-100
          transition-all
        "></span>
      </div>
      <div>
        <ng-content select="[ui-field-error]"/>
        <ng-content select="[ui-field-description]"/>
      </div>
  `,
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
  selector: 'label[ui-field-label]',
  template: `
    <ng-content/>
  `,
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpLabel }],
  host: {
    '[htmlFor]': 'htmlFor'
  }
})
export class FieldLabel {

  @Input() variant: Variants["variant"] | undefined;

  @Input() htmlFor!: string;

  @HostBinding('class')
  get klass() {
    return cn(fieldLabel({ variant: this.variant }))
  }

}

@Component({
  selector: 'ui-field-description',
  template: `<ng-content/>`,
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpDescription }],
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
  selector: 'input[ui-field-input]',
  template: '',
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpInput }],
  host: {
    '[attr.data-filled]': 'filled()',
    '[id]': 'id'
  }
})
export class FieldInput {

  @Input() variant: Variants["variant"] = "filled";

  @Input() type: Variants["type"];

  @Input() id: string | undefined;

  public filled = signal(false);

  @HostBinding('class')
  get klass() {
    return cn(fieldInput({ variant: this.variant, type: this.type }))
  }

  @HostListener('keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent) {
    this.filled.set(this.validateInput((event.target as HTMLInputElement)));
  }

  public validateInput(input: HTMLInputElement) {

    let value: string | null = null;

    if (!input) return false;

    value = input.value;

    if (value === null) return false;

    if (typeof value !== "string") return false;

    if (typeof value === "string" && value === "") return false;

    return true;
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
