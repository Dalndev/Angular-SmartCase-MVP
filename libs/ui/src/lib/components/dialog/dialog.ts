import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { cn } from "tailwind-variants";
import { NgpDialog, NgpDialogDescription, NgpDialogOverlay, NgpDialogTitle, provideDialogState } from "ng-primitives/dialog";
import { dialog, dialogDescription, dialogFooter, dialogHeader, dialogOverlay, dialogTitle } from "./styles/dialog.styles";

@Component({
    selector: 'ui-dialog-overlay',
    template: `
        <ng-content/>
    `,
    imports: [
        CommonModule,
    ],
    hostDirectives: [{ directive: NgpDialogOverlay }],
    providers: [provideDialogState()]
})
export class DialogOverlay { 

    @Input()
    public clazz: string | undefined;

    @HostBinding("class")
    get klass() {
        return cn(dialogOverlay(), this.clazz)
    }

}

@Component({
    selector: 'ui-dialog',
    template: `
        <ng-content/>
    `,
    imports: [
        CommonModule
    ],
    hostDirectives: [{ directive: NgpDialog }]
})
export class Dialog { 

    @Input()
    public clazz: string | undefined;

    @HostBinding("class")
    get klass() {
        return cn(dialog(), this.clazz)
    }

}

@Component({
    selector: 'ui-dialog-header',
    template: `
        <ng-content/>
    `,
    imports: [
        CommonModule
    ]
})
export class DialogHeader { 

    @Input()
    public clazz: string | undefined;

    @HostBinding("class")
    get klass() {
        return cn(dialogHeader(), this.clazz)
    }    
}

@Component({
    selector: 'ui-dialog-title',
    template: `
        <ng-content/>
    `,
    imports: [
        CommonModule
    ],
    hostDirectives: [{ directive: NgpDialogTitle }]
})
export class DialogTitle { 
    
    @Input()
    public clazz: string | undefined;

    @HostBinding("class")
    get klass() {
        return cn(dialogTitle(), this.clazz)
    }
}

@Component({
    selector: 'ui-dialog-description',
    template: `
        <ng-content/>
    `,
    imports: [
        CommonModule
    ],
    hostDirectives: [{ directive: NgpDialogDescription }]
})
export class DialogDescription { 

    @Input()
    public clazz: string | undefined;

    @HostBinding("class")
    get klass() {
        return cn(dialogDescription(), this.clazz)
    }
}

@Component({
    selector: 'ui-dialog-footer',
    template: `
        <ng-content/>
    `,
    imports: [
        CommonModule
    ]
})
export class DialogFooter { 

    @Input()
    public clazz: string | undefined;

    @HostBinding("class")
    get klass() {
        return cn(dialogFooter(), this.clazz)
    }    
}