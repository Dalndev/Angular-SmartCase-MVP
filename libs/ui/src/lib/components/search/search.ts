import { Component, HostBinding, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matSearchOutline } from "@ng-icons/material-icons/outline";
import { NgpButton } from "ng-primitives/button";
import { NgpInput } from "ng-primitives/input";
import { NgpSearch, NgpSearchClear } from "ng-primitives/search";
import { provideValueAccessor } from "ng-primitives/utils";
import { Button } from "../button";
import { styles } from "./styles/search.styles";
import { CommonModule } from "@angular/common";

/**
 * 
 * @see {@link https://m3.material.io/components/search/specs | Material Design Search}
 */
@Component({
  selector: 'ui-search',
  imports: [
    CommonModule,
    NgIcon, 
    NgpSearchClear, 
    NgpInput, 
    NgpButton,
    Button
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

  @Input() placeholder = "Search";

  @HostBinding('class')
  get styles() {
    return styles()
  }
}
