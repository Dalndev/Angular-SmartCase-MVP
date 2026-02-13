import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { FAB } from "../fab";
import { CommonModule } from "@angular/common";
import { NgpButton } from "ng-primitives/button";
import { NgIcon } from "@ng-icons/core";

const meta: Meta<FAB> = { 
    title: "Material Design/FAB",
    component: FAB,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, NgpButton, NgIcon],
            declarations: [],
            providers: []
        })
    ]
};

export default meta;

type Story = StoryObj<FAB>;

export const variants: Story = {
    name: "Variants",
    render: () => ({
        template: `
            <ui-fab></ui-fab>
        `
    })
}