import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { 
  navigationRail, 
  navigationContent, 
  navigationFooter, 
  navigationHeader, 
  navigationItem, 
  navigationItemLabel, 
  navigationList, 
  navigationPortal, 
  navigation 
} from "./styles/navigation.styles";
import {
  NgpNavigationMenu,
  NgpNavigationMenuItem,
  NgpNavigationMenuList
} from "ng-primitives/navigation-menu";

/**
 * @todo ...
 */

/**
 * @author Dalndev
 * 
 * @description Navigation rails let people switch between UI views on mid-sized devices
 * 
 * @see {@link https://m3.material.io/components/navigation-rail/specs | Material Design - Navigation }
 * @see {@link https://angularprimitives.com/primitives/navigation-menu | Angular Primitives - Navigation Menu}
 * @see {@link https://www.shadcn.io/ui/sidebar | Shadcn - Sidebar}
 */
@Component({
  selector: 'ui-navigation',
  imports: [CommonModule],
  template: `<ng-content />`,
  host: {
    '[class]': 'styles'
  }
})
export class Navigation { 
  get styles() {
    return navigation()
  }
}

@Component({
  selector: 'ui-navigation-rail',
  imports: [CommonModule],
  hostDirectives: [NgpNavigationMenu],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'styles',
    'data-state': 'closed',
    'data-slot': 'navigation-rail',
    'orientation': 'vertical'
  }
})
export class NavigationRail { 
  get styles() {
    return navigationRail()
  }
}

@Component({
  selector: 'ui-navigation-toggle',
  imports: [CommonModule],
  template: `
    <ng-content />
  `,
  host: {
    'role': 'button',
    'data-slot': 'navigation-toggle'
  }
})
export class NavigationToggle { }

@Component({
  selector: 'ui-navigation-header',
  imports: [CommonModule],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'styles',
    'data-slot': 'navigation-header'
  }
})
export class NavigationHeader { 
  get styles() {
    return navigationHeader()
  }
}

@Component({
  selector: 'ui-navigation-content',
  imports: [CommonModule],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'styles'
  }
})
export class NavigationContent { 
  get styles() {
    return navigationContent()
  }
}

@Component({
  selector: 'ui-navigation-footer',
  imports: [CommonModule],
  template: `<ng-content />`,
  host: {
    '[class]': 'styles'
  }
})
export class NavigationFooter { 
  get styles() {
    return navigationFooter()
  }
}

@Component({
  selector: 'ui-navigation-list', 
  imports: [CommonModule],
  hostDirectives: [NgpNavigationMenuList],
  template: `
    <ng-content />
  `,
  host: {
    'role': 'list',
    '[class]': 'styles'
  }
})
export class NavigationList { 
  get styles() {
    return navigationList()
  }
}

@Component({
  selector: 'ui-navigation-item',
  imports: [CommonModule],
  hostDirectives: [NgpNavigationMenuItem],
  template: `
    <ng-content />
  `,
  host: {
    'role': 'listitem',
    '[class]': 'styles',
    '[attr.data-active]': 'false'
  }
})
export class NavigationItem { 
  get styles() {
    return navigationItem()
  }
}

export class NavigationLink { }

@Component({
  selector: 'ui-navigation-portal',
  imports: [CommonModule],
  template: `<ng-content />`,
  host: {
    '[class]': 'styles'
  }
})
export class NavigationPortal{ 
  get styles() {
    return navigationPortal()
  }
}

@Component({
  selector: 'label[ui-navigation-item-label]',
  imports: [CommonModule],
  template: `<ng-content />`,
  host: {
    '[class]': 'styles',
    'data-slot': 'item-label'
  }
})
export class NavigationItemLabel { 
  get styles() {
    return navigationItemLabel()
  }
}