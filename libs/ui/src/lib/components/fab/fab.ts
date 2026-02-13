import { Component } from "@angular/core";
import { tv, VariantProps } from "tailwind-variants";

const fab = tv({
    base: "",
    variants: { },
    defaultVariants: { },
    compoundVariants: []
});

export type FABVariants = VariantProps<typeof fab>;

@Component({
    selector: "ui-fab",
    template: `
        
    `,
})
export class FAB { }