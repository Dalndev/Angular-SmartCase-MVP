/* eslint-disable @angular-eslint/directive-selector */
import { 
  Directive,
  HostListener, 
  Input as InputProp, 
  signal 
} from "@angular/core";
import { NgpInput } from "ng-primitives/input";
import { cn } from "tailwind-variants";
import { styles } from "./styles/input.styles";

/**
 * @todo ui. Implementar la variación "outline" del componente field/input en el sistema.
 * @todo ui. Implementar la variación "filled" del componente field/input en el sistema.
 * @todo ui. Implementar el diseño para el input de tipo "email".
 * @todo ui. Implementar el diseño para el input de tipo "tel".
 */

/**
 * @author Dalndev
 * 
 * @description Let users enter text into a UI.
 * 
 * @see {@link}
 */
@Directive({
  selector: 'input[ui-input]',
  hostDirectives: [{ directive: NgpInput }],
  host: {
    '[id]': 'id',
    '[class]': 'styles',
    '[attr.data-filled]': 'filled()',
    'data-slot': 'input'
  }
})
export class Input {

  @InputProp() id: string | undefined;

  public filled = signal(false);

  get styles() {
    return cn(styles())
  }

  @HostListener('keyup', ['$event'])
  public onKeyUp(event: Event) {
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