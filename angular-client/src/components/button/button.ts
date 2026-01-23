import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { ButtonSize, ButtonVariant } from "./button.types";
import { NgpButton } from "ng-primitives/button";

const baseStyle = ""

const variants: Record<ButtonVariant, string> = {
  elevated: "",
  filled: "",
  tonal: "",
  outlined: "",
  text: ""
};

const sizes: Record<ButtonSize, string> = {
  xs: "",
  sm: "",
  md: "",
  lg: "",
  xl: ""
}

@Component({
  selector: 'smc-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
  imports: [CommonModule],
  host: {
    'role': 'button',
    '[attr.data-size]': 'size()',
  }
})
export class Button {

  readonly size = input<ButtonSize>();

  readonly variant = input<ButtonVariant>();



}