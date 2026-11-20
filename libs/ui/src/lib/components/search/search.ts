import { Component, HostBinding, Input } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matSearchOutline } from "@ng-icons/material-icons/outline";
import { NgpInput } from "ng-primitives/input";
import { NgpSearch } from "ng-primitives/search";
import { provideValueAccessor } from "ng-primitives/utils";
import { styles } from "./styles/search.styles";
import { CommonModule } from "@angular/common";

const SEARCH_PLACEHOLDER_FALLBACK = "Search"

/**
 * @todo
 */

/**
 * @author Dalndev
 * 
 * @description Lorem...
 * 
 * @see {@link https://m3.material.io/components/search/specs | Material Design Search}
 */
@Component({
  selector: 'ui-search',
  imports: [
    CommonModule,
    NgIcon,
    NgpInput,
  ],
  hostDirectives: [NgpSearch],
  providers: [provideValueAccessor(Search), provideIcons({ matSearchOutline })],
  template: `
    <ng-icon
      slot="trailing"
      name="matSearchOutline"
    />
    <input 
      ngpInput
      [value]=""
      [placeholder]="placeholder"
      (input)="null"
      class="w-full h-full outline-none bg-none border-none rounded-none p-0"
    />
    <ng-content select="[slot=leading]"/>
  `,
})
export class Search { 

  @Input() placeholder = SEARCH_PLACEHOLDER_FALLBACK;

  @HostBinding('class')
  get styles() {
    return styles()
  }
}
