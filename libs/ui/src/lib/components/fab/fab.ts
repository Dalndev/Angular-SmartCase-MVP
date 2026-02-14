import { CommonModule } from "@angular/common";
import { Component, computed, Input } from "@angular/core";
import { NgpButton } from "ng-primitives/button";
import { tv, VariantProps } from "tailwind-variants";

const classes = tv({
    base: "relative inline-flex items-center justify-center whitespace-nowrap text-base font-roboto transition-colors overflow-hidden",
    variants: {
        variants: {
            primary: "bg-primary text-on-primary shadow-elevation-light-medium",
            secondary: "",
            tertiary: ""
        },
        sizes: {
            default: "",
            md: "",
            lg: ""
        },
        disabled: {
            true: ""
        }
    },
    defaultVariants: {
        variants: "primary",
        sizes: "default"
    },
    compoundVariants: []
});

export type FABVariants = VariantProps<typeof classes>;

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
            <span class="relative"></span>
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
        classes({ sizes: this.size, variants: this.variant, disabled: this.disabled })
    );

}