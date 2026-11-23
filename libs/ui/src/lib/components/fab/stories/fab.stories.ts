import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { NgpButton } from "ng-primitives/button";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matStarsOutline } from "@ng-icons/material-icons/outline";
import { FAB } from "../fab";

const meta: Meta<FAB> = {
    title: "Material Design/Buttons/FAB",
    component: FAB,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, NgpButton, NgIcon],
            declarations: [],
            providers: [
                provideIcons({ matStarsOutline })
            ]
        })
    ]
};

export default meta;

type Story = StoryObj<FAB>;

export const variants: Story = {
    name: "Variants",
    render: () => ({
        template: `
            <ui-fab>
                <ng-icon name="matStarsOutline"/>
            </ui-fab>
            <ui-fab variant="secondary">
                <ng-icon name="matStarsOutline"/>
            </ui-fab>
            <ui-fab variant="tertiary">
                <ng-icon name="matStarsOutline"/>
            </ui-fab>
        `
    })
}

export const sizes: Story = {
    name: "Sizes",
    render: () => ({
        template: `
            <ui-fab>
                <ng-icon name="matStarsOutline"/>
            </ui-fab>
            <ui-fab size="md">
                <ng-icon name="matStarsOutline"/>
            </ui-fab>
            <ui-fab size="lg">
                <ng-icon name="matStarsOutline"/>
            </ui-fab>
        `
    })
}