import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { cn, tv } from "tailwind-variants";
import { NgpDialog, NgpDialogDescription, NgpDialogOverlay, NgpDialogTitle, provideDialogState } from "ng-primitives/dialog";

const classes = tv({
    slots: {
        "dialogOverlay": 
            "fixed bg-scrim-high backdrop-blur flex justify-center items-center inset-0 isolate z-50",
        "dialog": 
            "h-max min-w-[280px] max-w-[560px] bg-surface-container-high rounded-[28px] shadow-elevation-light-medium",
        "dialogHeader": 
            "flex flex-col justify-center items-center gap-[16px] px-[24px] pt-[24px]",
        "dialogTitle": 
            "text-on-surface text-headline-small-emphasized leading-none",
        "dialogDescription": 
            "text-on-surface-variant text-body-medium",
        "dialogFooter": 
            "flex justify-end items-center px-[24px] py-[24px] gap-[8px]"
    }
});

const { 
    dialogOverlay, 
    dialog,
    dialogHeader,
    dialogTitle, 
    dialogDescription,
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