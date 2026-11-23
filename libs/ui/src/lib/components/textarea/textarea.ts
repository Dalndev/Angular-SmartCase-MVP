import { Directive } from "@angular/core";
import { NgpTextarea } from "ng-primitives/textarea"

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
  hostDirectives: [{ directive: NgpTextarea }]
})
export class TextArea { }