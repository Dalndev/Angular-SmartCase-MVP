/* eslint-disable @angular-eslint/no-input-rename */

import { CommonModule } from "@angular/common";
import { Component, computed, Directive, HostBinding, input, Input } from "@angular/core";
import {
  NgpSelectDropdown,
  injectSelectState,
} from "ng-primitives/select";
import { provideIcons, NgIcon } from "@ng-icons/core"
import { matArrowDropDownOutline } from "@ng-icons/material-icons/outline";
import { cn } from "tailwind-variants";
import { select, selectContent, selectItem, selectValue } from "./styles/select.styles"

@Component({
  selector: 'ui-select',
  template: `
    <div class="
      box-border w-full inline-flex items-center cursor-pointer
      
    ">
      <ng-content/>
      <ng-icon 
        name="matArrowDropDownOutline" 
        size="24"
        class="
          [ui-select[data-focus]_&]:rotate-180 
          [ui-select[data-focus]_&]:[--ng-icon__color:var(--primary)]
          transition-all ease-in-out
        "
      />
    </div>
  `,
  imports: [
    CommonModule,
    NgIcon
],
  providers: [
    provideIcons({ matArrowDropDownOutline })
  ],
  hostDirectives: [],
  host: {
    "role": "button",
    "[attr.data-filled]": "isFilled()",
    "[attr.data-focus]": "isFocus() ? '' : undefined",
    "[class]": "styles()"
  }
})
export class Select {

  private readonly state = injectSelectState();

  public clazz = input<string>('', { alias: 'class' });

  protected styles = computed(() => cn(select(), this.clazz));

  isFilled = computed(() => !!this.state().value())

  isFocus = computed(() => this.state().open());
}

@Component({
  selector: 'ui-select-value',
  template: `
    @if (value(); as value) {
      {{ value }}
    } @else {
      &#8203;
    }
  `,
  imports: [
    CommonModule
  ]
})
export class SelectValue {

  private readonly state = injectSelectState();

  @Input({ alias: 'class' }) clazz: string | undefined;

  @HostBinding('class')
  get styles() {
    return cn(selectValue(), this.clazz);
  }

  get value() {
    return this.state().value;
  }
}

@Component({
  selector: 'ui-select-content',
  template: `
    <ng-content/>
  `,
  imports: [
    CommonModule
  ],
  providers: [],
  hostDirectives: [
    { directive: NgpSelectDropdown }
  ]
})
export class SelectContent {
  @Input({ alias: 'class' }) clazz: string | undefined;

  @HostBinding('class')
  get styles() {
    return cn(selectContent(), this.clazz);
  }
}

@Directive({
  selector: '[ui-select-item]',
})
export class SelectItem {
  @Input({ alias: 'class' }) clazz: string | undefined;

  @HostBinding('class')
  get styles() {
    return cn(selectItem(), this.clazz);
  }
}