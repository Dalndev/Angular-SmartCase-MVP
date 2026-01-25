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
      <div class="flex flex-col gap-2 justify-center items-center">
        <ui-button size="xs">Extra Small</ui-button>
        <ui-button size="sm">Small</ui-button>
        <ui-button size="md">Medium</ui-button>
        <ui-button size="lg">Large</ui-button>
        <ui-button size="xl">Extra Large</ui-button>
      </div>
    `,
  }),
};

export const variants: Story = {
  name: 'Variants',
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-button variant="elevated">Elevated</ui-button>
        <ui-button variant="filled">Filled</ui-button>
        <ui-button variant="tonal">Tonal</ui-button>
        <ui-button variant="outlined">Outlined</ui-button>
        <ui-button variant="text">Text</ui-button>
      </div>
    `,
  }),
};