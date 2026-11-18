/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgpMenu, NgpMenuItem } from "ng-primitives/menu";
import { menu, menuBadge, menuItem, menuSeparator } from "./styles/menu.styles";
import { CommonModule } from "@angular/common";
import { NgpFocus, NgpHover, NgpPress } from "ng-primitives/interactions";

/**
 * @todo feat. Implementar el estado "selected" en la lista. Permite dar feedback al usuario sobre la opción seleccionada.
 * @todo feat. Implementar el componente "MenuSeparator" para separar entre secciones en el menu implementado.
 * @todo feat. Implementar el componente "MenuBadge" para indicar información relevante asociada al menu.
 * @todo ui. Implementar la variación de color "standard" para gestionar otro estilo a nivel de componente.
 * @todo ui. Implementar la variación de color "vibrant" para gestionar otro estilo a nivel de componente.
 */

/**
 * @author Dalndev
 * 
 * @description Display a list of choices on a temporary surface
 * 
 * @see {@link https://m3.material.io/components/menus/specs | Material Design - Menus}
 * @see {@link https://angularprimitives.com/primitives/menu | Angular Primitives - Menus}
 * @see {@link https://www.shadcn.io/ui/dropdown-menu | Shadcn - Menu}
 */
@Component({
  selector: 'ui-menu',
  imports: [CommonModule],
  hostDirectives: [NgpMenu,],
  template: `<ng-content />`,
  host: {
    '[class]': 'styles'
  }
})
export class Menu { 
  get styles() {
    return menu()
  }
}

@Component({
  selector: '[ui-menu-item]',
  imports: [CommonModule],
  hostDirectives: [NgpMenuItem, NgpHover, NgpFocus, NgpPress],
  template: `
    <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
    <ng-content select="[slot=leading]"/>
    <ng-content />
  `,
  host: {
    'role': 'button',
    '[tabindex]': '0',
    '[class]': 'styles',
    'data-slot': 'menu-item',
    '(click)': 'onClick($event)',
    '(focus)': 'onFocus($event)',
    '(blur)': 'onBlur($event)'
  }
})
export class MenuItem { 
  @Input() badge = false;

  @Output() itemClick = new EventEmitter<Event>();

  @Output() itemFocus = new EventEmitter<FocusEvent>();

  @Output() itemBlur = new EventEmitter<Event>();

  get styles() {
    return menuItem()
  }

  public onClick(event: Event) { 
    this.itemClick.emit(event)
  }

  public onFocus(event: FocusEvent) {
    this.itemFocus.emit(event)
  }

  public onBlur(event: Event) {
    this.itemBlur.emit(event)
  }
}

@Component({ 
  selector: 'ui-menu-separator',
  template: ``
})
export class MenuSeparator { 
  get styles() {
    return menuSeparator()
  }
}

@Component({
  selector: 'ui-menu-badge',
  template: ``
})
export class MenuBadge { 
  get styles() {
    return menuBadge()
  }
}