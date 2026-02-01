import { CommonModule } from "@angular/common";
import { moduleMetadata } from "@storybook/angular";
import { Button } from "../button"
import { NgpButton } from "ng-primitives/button";
import type { Meta, StoryObj } from "@storybook/angular";

const meta: Meta<Button> = {
  title: 'Material Design/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgpButton],
      declarations: [],
      providers: [],
    })
  ]
}

export default meta;

type Story = StoryObj<Button>;

export const sizes: Story = {
  name: "Sizes",
  args: { },
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-button size="xs">Extra small button</ui-button>
        <ui-button size="sm">Small button</ui-button>
        <ui-button size="md">Medium button</ui-button>
        <ui-button size="lg">Large button</ui-button>
        <ui-button size="xl">Extra large button</ui-button>
      </div>
    `,
  }),
};

export const variants: Story = {
  name: 'Variants',
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-button variant="elevated">Elevated button</ui-button>
        <ui-button variant="filled">Filled button</ui-button>
        <ui-button variant="tonal">Tonal button</ui-button>
        <ui-button variant="outlined">Outlined button</ui-button>
        <ui-button variant="text">Text button</ui-button>
        <ui-button variant="danger">Danger button</ui-button>
      </div>
    `,
  }),
};

export const shapes: Story = {
  name: 'Shapes',
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-button shapes="rounded">Rounded button</ui-button>
        <ui-button shapes="squared">Squared button</ui-button>
      </div>
    `
  })
}