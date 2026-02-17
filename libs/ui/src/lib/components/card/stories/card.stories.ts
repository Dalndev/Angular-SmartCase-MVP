import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Card } from "../card";

const meta: Meta<Card> = {
  title: 'Material Design/Card',
  component: Card,
  decorators: [
    moduleMetadata({})
  ]
};

export default meta;

export type Story = StoryObj<Card>;

export const variants: Story = {
  render: () => ({
    template: ``
  })
}