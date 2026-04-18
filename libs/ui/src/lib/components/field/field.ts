/* eslint-disable @angular-eslint/no-input-rename */
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, computed, Directive, ElementRef, HostBinding, inject, input, Input, ViewChild, viewChild } from "@angular/core";
import { cn } from "tailwind-variants";
import { NgpLabel, NgpDescription, NgpError } from "ng-primitives/form-field";
import { field, fieldLabel, fieldDescription, fieldError } from "./styles/field.styles";
import type { Variants } from "./dtypes/field.dtypes";

@Component({
  selector: 'ui-field',
  template: `
    <div #container class="box-border relative bg-surface-variant h-auto w-full px-[16px] flex-auto rounded-t-[4px] rounded-b-none">
      <div class="box-border inline-flex align-baseline w-full">
        <div class="box-border relative pb-[8px] pt-[24px] flex-auto min-w-0 w-[180px] min-h-[56px]">
          <ng-content select="[slot=leading]"/>
          <ng-content/>       
          <ng-content select="[ui-field-label]"/>
          <ng-content select="[slot=trailing]"/>
        </div>
      </div>
      <div class="
        before:absolute before:left-0 before:bottom-0 before:w-full before:border-b before:border-on-surface-variant before:z-1
        after:absolute after:left-0 after:bottom-0 after:w-full after:border-b-2 after:border-primary after:z-2 after:opacity-0 after:scale-x-0 
        [ui-field:has(input[data-filled='true'])_&]:after:opacity-100 [ui-field:has(input[data-filled='true'])_&]:after:scale-x-100
        [ui-field:has(input:focus)_&]:after:opacity-100 [ui-field:has(input:focus)_&]:after:scale-x-100
        transition-all
      "></div>
    </div>
    <div class="box-border relative w-full text-body-small before:inline-block before:h-[16px]">
      <div class="absolute top-0 left-0 right-0 px-[16px] flex opacity-[1] translate-y-0 *:before:inline-block *:before:h-[16px]">
        <ng-content select="[ui-field-error]"/>
        <ng-content select="[ui-field-description]"/>
        <div class="grow shrink-0 basis-[1em]"></div>
      </div>
    </div>
  `,
  imports: [CommonModule],
  providers: [],
  host: {
    "role": "group",
    '[class]': 'klass()'
  }
})
export class Field implements AfterViewInit {

  private el = inject(ElementRef);
  
  @ViewChild("container") container: ElementRef<HTMLDivElement> | undefined;
  
  clazz  = input<string>('', { alias: 'class' });
  variant = input<Variants['variant'] | undefined>(undefined);

  protected klass = computed(() =>
    cn(field({ variant: this.variant() }), this.clazz())
  );

  ngAfterViewInit(): void {
    console.log('nativeElement:', this.el.nativeElement);
    console.log(this.container)
  }
}

@Directive({
  selector: 'label[ui-field-label]',
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

@Directive({
  selector: '[ui-field-description]',
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

@Directive({
  selector: '[ui-field-error]',
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
