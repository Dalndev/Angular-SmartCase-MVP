import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { cn, tv } from "tailwind-variants";
import { NgpDialog, NgpDialogDescription, NgpDialogOverlay, NgpDialogTitle, provideDialogState } from "ng-primitives/dialog";

const classes = tv({
    slots: {
        "dialogOverlay": "fixed bg-scrim-high backdrop-blur flex justify-center items-center inset-0",
        "dialog": "bg-surface",
        "dialogContent": "",
        "dialogHeader": "",
        "dialogTitle": "",
        "dialogDescription": "",
        "dialogFooter": ""
    }
});

const { 
    dialogOverlay, 
    dialog, 
    dialogHeader, 
    dialogTitle, 
    dialogDescription, 
    dialogContent, 
    dialogFooter 
} = classes();

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
    selector: 'ui-dialog-content',
    template: ``,
    imports: [
        CommonModule
    ]
})
export class DialogContent { }

@Component({
    selector: 'ui-dialog-header',
    template: ``,
    imports: [
        CommonModule
    ]
})
export class DialogHeader { }

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
    template: ``,
    imports: [
        CommonModule
    ]
})
export class DialogFooter { }