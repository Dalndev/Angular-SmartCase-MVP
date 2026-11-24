/* eslint-disable @angular-eslint/directive-selector */
import { Directive, HostListener, Input, signal } from "@angular/core";
import { NgpTextarea } from "ng-primitives/textarea"
import { cn } from "tailwind-variants";
import { styles } from "./styles/textarea.styles";

/**
 * @author Dalndev
 * 
 * @description Textarea is a native multi-line text box for a comment, a message, a bio or a support note.
 * 
 * @see {@link https://angularprimitives.com/primitives/textarea | Angular Primitives - Textarea}
 * @see {@link https://www.shadcn.io/ui/textarea | Shadcn - Textarea}
 */
@Directive({
  selector: 'textarea[ui-textarea]',
  hostDirectives: [{ directive: NgpTextarea }],
  host: {
    '[id]': 'id',
    '[class]': 'styles',
    '[attr.data-filled]': 'filled()',
    'data-slot': 'text'
  }
})
export class TextArea { 
  @Input() id: string | undefined;

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