import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { cn } from "tailwind-variants";
import { NgpDialog, NgpDialogDescription, NgpDialogOverlay, NgpDialogTitle, provideDialogState } from "ng-primitives/dialog";
import { dialog, dialogDescription, dialogFooter, dialogHeader, dialogOverlay, dialogTitle } from "./styles/dialog.styles";

/**
 * @author
 * 
 * @description Provides important prompts in a user flow
 * 
 * @see {@link https://m3.material.io/components/dialogs/overview | Material Design - Dialogs}
 * @see {@link https://angularprimitives.com/primitives/dialog | Angular Primitives - Dialog}
 * @see {@link https://www.shadcn.io/ui/dialog | Shadcn - Dialog}
 */
@Component({
    selector: 'ui-dialog-overlay',
    imports: [CommonModule],
    hostDirectives: [{ directive: NgpDialogOverlay }],
    providers: [provideDialogState()],
    template: `<ng-content/>`,
    host: {
        '[class]': 'styles'
    }
})
export class DialogOverlay { 

    @Input()
    public clazz: string | undefined;

    get styles() {
        return cn(dialogOverlay(), this.clazz)
    }
}

@Component({
    selector: 'ui-dialog',
    template: `<ng-content/>`,
    imports: [CommonModule],
    hostDirectives: [{ directive: NgpDialog }],
    host: {
        '[class]': 'styles'
    }
})
export class Dialog { 

    @Input()
    public clazz: string | undefined;

    get styles() {
        return cn(dialog(), this.clazz)
    }
}

@Component({
    selector: 'ui-dialog-header',
    template: `<ng-content/>`,
    imports: [CommonModule],
    host: {
        '[class]': 'styles'
    }
})
export class DialogHeader { 

    @Input()
    public clazz: string | undefined;

    get styles() {
        return cn(dialogHeader(), this.clazz)
    }    
}

@Component({
    selector: 'ui-dialog-title',
    template: `<ng-content/>`,
    imports: [CommonModule],
    hostDirectives: [{ directive: NgpDialogTitle }],
    host: {
        '[class]': 'styles'
    }
})
export class DialogTitle { 
    
    @Input()
    public clazz: string | undefined;

    get styles() {
        return cn(dialogTitle(), this.clazz)
    }
}

@Component({
    selector: 'ui-dialog-description',
    template: `<ng-content/>`,
    imports: [CommonModule],
    hostDirectives: [{ directive: NgpDialogDescription }],
    host: {
        '[class]': 'styles'
    }
})
export class DialogDescription { 

    @Input()
    public clazz: string | undefined;

    get styles() {
        return cn(dialogDescription(), this.clazz)
    }
}

@Component({
    selector: 'ui-dialog-footer',
    template: `<ng-content/>`,
    imports: [CommonModule],
    host: {
        '[class]': 'styles'
    }
})
export class DialogFooter { 

    @Input()
    public clazz: string | undefined;

    get styles() {
        return cn(dialogFooter(), this.clazz)
    }    
}