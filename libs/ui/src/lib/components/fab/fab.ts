import { CommonModule } from "@angular/common";
import { Component, computed, Input } from "@angular/core";
import { NgpButton } from "ng-primitives/button";
import { tv, VariantProps } from "tailwind-variants";

const classes = tv({
    base: "relative inline-flex items-center justify-center whitespace-nowrap text-base font-roboto overflow-hidden ease-in-out transition-all",
    variants: {
        variants: {
            primary:
                "bg-primary text-on-primary outline-0 outline-transparent shadow-elevation-light-medium hover:[&>span]:bg-on-primary-state-layer-light-low data-press:[&>span]:bg-on-primary-state-layer-light focus:[&>span]:bg-on-primary-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline",
            secondary:
                "bg-secondary text-on-secondary outline-0 outline-transparent shadow-elevation-light-medium hover:[&>span]:bg-on-secondary-state-layer-light-low data-press:[&>span]:bg-on-secondary-state-layer-light focus:[&>span]:bg-on-secondary-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline",
            tertiary:
                "bg-tertiary text-on-tertiary outline-0 outline-transparent shadow-elevation-light-medium hover:[&>span]:bg-on-tertiary-state-layer-light-low data-press:[&>span]:bg-on-secondary-state-layer-light focus:[&>span]:bg-on-secondary-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline"
        },
        sizes: {
            default:
                "size-[56px] m-[16px] rounded-[16px] [--ng-icon__size:24px]",
            md:
                "size-[80px] m-[16px] rounded-[20px] [--ng-icon__size:28px]",
            lg:
                "size-[96px] m-[16px] rounded-[28px] [--ng-icon__size:36px]"
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