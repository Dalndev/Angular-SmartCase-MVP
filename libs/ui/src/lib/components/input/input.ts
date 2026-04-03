import { CommonModule } from "@angular/common";
import { Component, computed, Input as InputProp } from "@angular/core";
import { NgpInput } from "ng-primitives/input";
import { cn, tv, VariantProps } from "tailwind-variants";

const styles = tv({
  base: "w-full",
  variants: {
    variant: {
      filled: 
        "",
      outlined: 
        ""
    },
    input: {
      email: "",
      tel: "",
      input: ""
    }
  }
});

export type Variants = VariantProps<typeof styles>;

@Component({
  selector: 'input[ui-field-input]',
  template: '',
  imports: [CommonModule],
  hostDirectives: [{ directive: NgpInput }],
  host: {
    'class': 'klass()'
  }
})
export class FieldInput { 

  @InputProp() variant: Variants["variant"] = "filled";

  @InputProp() input: Variants["input"];

  public klass = computed(() => cn(styles({ variant: this.variant, input: this.input })))
}