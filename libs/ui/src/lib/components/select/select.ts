/* eslint-disable @angular-eslint/no-input-rename */

import { CommonModule } from "@angular/common";
import { Component, computed, Directive, HostBinding, input, Input } from "@angular/core";
import {
  NgpSelectDropdown,
  injectSelectState,
} from "ng-primitives/select";
import { provideIcons, NgIcon } from "@ng-icons/core"
import { matArrowDropDownOutline } from "@ng-icons/material-icons/outline";
import { cn, tv } from "tailwind-variants";

const styles = tv({
  slots: {
    select:
      "outline-none border-none rounded-none bg-none inline-block p-0 h-auto w-full min-w-0"
      +" peer",
    selectValue:
      "w-full overflow-hidden whitespace-nowrap text-ellipsis",
    selectContent:
      "absolute min-w-[112px] max-w-[280px] max-h-[275px] z-[1000] rounded-b-[4px] rounded-t-none py-[8px] bg-surface-container shadow-elevation-light-low"
      +" flex flex-col items-start justify-center"
      +" w-(--ngp-select-width) origin-(--ngp-select-transform-origin)",
    selectItem:
      "relative min-h-[48px] px-[16px] py-0 w-full border-none overflow-hidden cursor-pointer text-on-surface text-label-large"
      +" flex justify-start items-center",
  }
});

export const {
  select,
  selectContent,
  selectItem,
  selectValue
} = styles()

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
          transition-all
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
    "[class]": "klass()"
  }
})
export class Select {

  private readonly state = injectSelectState();

  public clazz = input<string>('', { alias: 'class' });

  protected klass = computed(() => cn(select(), this.clazz));

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
  get klass() {
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
  get klass() {
    return cn(selectContent(), this.clazz);
  }
}

@Directive({
  selector: '[ui-select-item]',
})
export class SelectItem {
  @Input({ alias: 'class' }) clazz: string | undefined;

  @HostBinding('class')
  get klass() {
    return cn(selectItem(), this.clazz);
  }
}