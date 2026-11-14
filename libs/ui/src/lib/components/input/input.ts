import { 
  Directive, 
  HostBinding, 
  HostListener, 
  Input as InputProp, 
  signal 
} from "@angular/core";
import { NgpInput } from "ng-primitives/input";
import { cn } from "tailwind-variants";
import { styles } from "./styles/input.styles";
import type { Variants } from "./dtypes/input.dtypes";

@Directive({
  selector: 'input[ui-input]',
  hostDirectives: [{ directive: NgpInput }],
  host: {
    '[attr.data-filled]': 'filled()',
    '[id]': 'id'
  }
})
export class Input {

  @InputProp() variant: Variants["variant"] = "filled";

  @InputProp() id: string | undefined;

  public filled = signal(false);

  @HostBinding('class')
  get klass() {
    return cn(styles({ variant: this.variant }))
  }

  @HostListener('keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent) {
    this.filled.set(this.validateInput((event.target as HTMLInputElement)));
  }

  public validateInput(input: HTMLInputElement) {

    let value: string | null = null;

    if (!input) return false;

    value = input.value;

    if (value === null) return false;

    if (typeof value !== "string") return false;

    if (typeof value === "string" && value === "") return false;

    return true;
  }
}