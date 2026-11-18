/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-input-rename */
import { CommonModule } from "@angular/common";
import { Component, computed, Directive, input, Input } from "@angular/core";
import {
  NgpSelectDropdown,
  injectSelectState,
} from "ng-primitives/select";
import { provideIcons, NgIcon } from "@ng-icons/core"
import { matArrowDropDownOutline } from "@ng-icons/material-icons/outline";
import { cn } from "tailwind-variants";
import { select, selectContent, selectItem, selectValue } from "./styles/select.styles"

/**
 * @todo ui. Implementar la variación "outline" del componente field/input en el sistema.
 * @todo ui. Implementar la variación "filled" del componente field/input en el sistema.
 */

/**
 * @author Dalndev
 * 
 * @description Button that opens a fixed list of options and, once someone picks one, shows its label in place of the prompt.
 * 
 * @see {@link https://angularprimitives.com/primitives/select | Angular Primitives - Select}
 * @see {@link https://www.shadcn.io/ui/select | Shadcn - Select}
 */
@Component({
  selector: 'ui-select',
  template: `
    <div class="box-border w-full inline-flex items-center cursor-pointer">
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
  imports: [CommonModule],
  template: `
    @if (value(); as value) {
      {{ value }}
    }

    @if (!value()) {
      &#8203;
    }
  `,
  host: {
    '[class]': 'styles'
  }
})
export class SelectValue {

  private readonly state = injectSelectState();

  @Input({ alias: 'class' }) clazz: string | undefined;

  get styles() {
    return cn(selectValue(), this.clazz);
  }

  get value() {
    return this.state().value;
  }
}

@Component({
  selector: 'ui-select-content',
  template: `<ng-content/>`,
  imports: [CommonModule],
  providers: [],
  hostDirectives: [{ directive: NgpSelectDropdown }],
  host: {
    '[class]': 'styles'
  }
})
export class SelectContent {
  @Input({ alias: 'class' }) clazz: string | undefined;

  get styles() {
    return cn(selectContent(), this.clazz);
  }
}

@Directive({
  selector: '[ui-select-item]',
  host: {
    '[class]': 'styles'
  }
})
export class SelectItem {
  @Input({ alias: 'class' }) clazz: string | undefined;

  get styles() {
    return cn(selectItem(), this.clazz);
  }
}