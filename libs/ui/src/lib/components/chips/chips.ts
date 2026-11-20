import { CommonModule } from "@angular/common";
import { Component, contentChild, effect, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { styles } from "./styles/chips.styles";
import { ChipsVariants } from "./dtypes/chips.dtypes";
import { NgpFocus, NgpHover, NgpPress } from "ng-primitives/interactions";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matArrowDropDownOutline, matCheckOutline, matCloseOutline } from "@ng-icons/material-icons/outline";
import { NgpMenuTrigger } from "ng-primitives/menu";

/**
 * TODO's
 * 
 * @todo ui. Implementar las propiedades asociadas al estado "pressed" del componente "FilterChip".
 * @todo ui. Implementar las propiedades asociadas al estado "dragged" del componente "FilterChip".
 * @todo feat. Implementar la variación "input" para el ingreso de información en formularios.
 * @todo feat. Implementar la integración con el componente "menu" para mostrar lista de opciones.
 */

/**
 * @author Dalndev
 * 
 * @description Chips help people enter information, make selections, filter content, or trigger actions.
 * 
 * @see {@link https://m3.material.io/components/chips/specs | Material Design - Chips}
 * @see {@link https://www.shadcn.io/ui/tags-input | Shadcn - Tags Input}
 */
@Component({
  selector: 'ui-chip',
  imports: [CommonModule],
  hostDirectives: [NgpPress, NgpFocus, NgpHover],
  template: `
    <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
    <ng-content select="[slot=leading]" />
    <ng-content />
    <ng-content select="[slot=trailing]" />
  `,
  host: {
    '[class]': 'styles',
    '[tabindex]': 'disabled || 0',
    '[attr.data-disabled]': 'disabled',
    '(click)': 'onClick($event)',
    '(focus)': 'onFocus($event)',
    '(blur)': 'onBlur($event)'
  }
})
export class Chip {

  @Input() variant: ChipsVariants["variant"];

  @Input() disabled = false;

  @Output() chipClick = new EventEmitter<Event>();

  @Output() chipFocus = new EventEmitter<FocusEvent>();

  @Output() chipBlur = new EventEmitter<Event>();
  
  get styles() {
    return styles({ variant: this.variant, })
  }

  public onClick(event: Event) {
    this.chipClick.emit(event);
  }

  public onFocus(event: FocusEvent) {
    this.chipFocus.emit(event);
  }

  public onBlur(event: Event) {
    this.chipBlur.emit(event);
  }
}

@Component({
  selector: 'ui-filter-chip',
  imports: [
    CommonModule,
    NgIcon,
    NgpMenuTrigger
  ],
  providers: [
    provideIcons({ matArrowDropDownOutline , matCheckOutline, matCloseOutline })
  ],
  hostDirectives: [
    NgpFocus, 
    NgpHover, 
    NgpPress,
  ],
  template: `
    @if(withMenus) {
      <span 
        type="button"
        class="absolute top-0 left-0 w-full h-full"
        [ngpMenuTrigger]="menusTemplate()" 
      ></span>
    }

    @if(!withMenus) {
      <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
    }

    <ng-content />
    
    @if(selected && !withMenus) {
      <ng-icon slot="leading" name="matCheckOutline"/>
    }

    @if(!selected && !withMenus) {
      <ng-content select="[slot=leading]" />
    }

  `,
  host: {
    role: 'button',
    '[class]': 'styles',
    '[tabindex]': 'disabled || 0',
    '[attr.data-disabled]': 'disabled',
    '[attr.data-selected]': 'selected',
    '(click)': 'onClick($event)',
  }
})
export class FilterChip { 
  @Input() variant: ChipsVariants["variant"];

  @Input() withMenus = false;

  @Input() selected = false;

  @Input() disabled = false;

  @Output() chipClick = new EventEmitter<Event>();

  @Output() chipFocus = new EventEmitter<FocusEvent>();

  @Output() chipBlur = new EventEmitter<Event>();

  readonly menusTemplate = contentChild('menus', { read: TemplateRef })
  
  constructor() {
    effect(() => { console.log("[Menus] := ", this.menusTemplate()) })
  }

  get styles() {
    return styles({ variant: this.variant, selected: this.selected })
  }

  private toggleSelected() {
    if (this.withMenus) return

    this.selected = !this.selected;
  }

  public onClick(event: Event) {
    this.toggleSelected();
    this.chipClick.emit(event);
  }
}