import { CommonModule } from "@angular/common";
import { Component, EventEmitter, HostBinding, Input, Output } from "@angular/core";
import classes from "./styles/chips.styles";
import { ChipsVariants } from "./dtypes/chips.dtypes";
import { NgpPress } from "ng-primitives/interactions";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matKeyboardArrowDownRound } from "@ng-icons/material-icons/round";
import { matCheckOutline } from "@ng-icons/material-icons/outline";

/**
 * @author Daln.dev
 * 
 * Chips help people enter information, make selections, filter content, or trigger actions.
 * 
 * @see {@link https://m3.material.io/components/chips/specs | Material Design Chips Specs}
 */
@Component({
  selector: 'ui-chip',
  imports: [CommonModule],
  template: `
    <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
    <ng-content select="[slot=leading]" />
    <ng-content />
    <ng-content select="[slot=trailing]" />
  `,
  hostDirectives: [NgpPress],
})
export class Chip {

  @Input() variant: ChipsVariants["variant"];

  @Input() disabled = false;

  @Output() chipClick = new EventEmitter<Event>();

  @Output() chipFocus = new EventEmitter<FocusEvent>();

  @Output() chipBlur = new EventEmitter<Event>();
  
  @HostBinding('class')
  get klass() {
    return classes({ variant: this.variant, })
  }

  @HostBinding('attr.data-disabled')
  get _disabled() {
    return this.disabled || null;
  }

  public _onClick(event: Event) {
    this.chipClick.emit(event);
  }

  public _onFocus(event: FocusEvent) {
    this.chipFocus.emit(event);
  }

  public _onBlur(event: Event) {
    this.chipBlur.emit(event);
  }
}

@Component({
  selector: 'ui-input-chip',
  imports: [CommonModule],
  template: `
    <ng-content select="[slot=leading]" />
    <ng-content />
    <ng-content select="[slot=trailing]" />
  `
})
export class InputChip { 

  @Input() avatar!: string;

  @Input() variant: ChipsVariants["variant"];

  @Output() chipClick = new EventEmitter<Event>();

  @Output() chipFocus = new EventEmitter<FocusEvent>();

  @Output() chipBlur = new EventEmitter<Event>();
  
  get klass() {
    return classes()
  }

  public _onClick(event: Event) {
    this.chipClick.emit(event);
  }

  public _onFocus(event: FocusEvent) {
    this.chipFocus.emit(event);
  }

  public _onBlur(event: Event) {
    this.chipBlur.emit(event);
  }
}

@Component({
  selector: 'ui-filter-chip',
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matKeyboardArrowDownRound, matCheckOutline })],
  template: `
    <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
    @if(selected) {
      <ng-icon slot="leading" name="matCheckOutline"/>
    }
    @if(!selected) {
      <ng-content select="[slot=leading]" />
    }
    <ng-content />
    @if(menu) {
      <ng-icon name="matKeyboardArrowDownRound" slot="trailing"/>
    }
  `,
  host: {
    role: 'button',
    '[attr.disabled]': 'disabled',
    '[attr.selected]': 'selected',
    '(click)': '_onClick($event)',
  }
})
export class FilterChip  { 
  @Input() variant: ChipsVariants["variant"];

  @Input() selected = false;

  @Input() disabled = false;

  @Input() menu = false;

  @Output() chipClick = new EventEmitter<Event>();

  @Output() chipFocus = new EventEmitter<FocusEvent>();

  @Output() chipBlur = new EventEmitter<Event>();
  
  @HostBinding('class')
  get klass() {
    return classes({ variant: this.variant, selected: this.selected })
  }

  private toggleSelected() {
    this.selected = !this.selected;
  }

  public _onClick(event: Event) {
    this.toggleSelected();
    this.chipClick.emit(event);
  }
  
}