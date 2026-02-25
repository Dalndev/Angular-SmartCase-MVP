import { CommonModule } from "@angular/common";
import { Component, computed, Input } from "@angular/core";
import { NgpButton } from "ng-primitives/button";
import { FABVariants } from "./dtypes/fab.dtypes";
import classes from "./styles/fab.styles";

@Component({
    selector: "ui-fab",
    standalone: true,
    imports: [
        CommonModule,
        NgpButton
    ],
    template: `
        <button
            ngpButton
            role="button"
            [class]="klass()"
            [disabled]="disabled"
        >
            <span class="absolute w-full h-full top-0 left-0 pointer-events-none"></span>
            <ng-content select="[slot=leading]"/>
            <ng-content />
        </button>
    `,
})
export class FAB {

    @Input() size: FABVariants['sizes'];

    @Input() variant: FABVariants['variants'];

    @Input() disabled = false;

    public klass = computed(() =>
        classes({ sizes: this.size, variants: this.variant })
    );

}