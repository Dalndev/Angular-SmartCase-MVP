/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from "@angular/core";
import { NgpMenu, NgpMenuItem } from "ng-primitives/menu";
import { menu, menuBadge, menuItem, menuSeparator } from "./styles/menu.styles";
import { CommonModule } from "@angular/common";
import { NgpFocus, NgpHover, NgpPress } from "ng-primitives/interactions";

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
    '[class]': 'styles',
    'data-slot': 'menu-item'
  }
})
export class MenuItem { 
  @Input() badge = false;

  get styles() {
    return menuItem()
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