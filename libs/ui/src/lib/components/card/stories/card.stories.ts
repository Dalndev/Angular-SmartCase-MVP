import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";

const meta: Meta<Card> = {
  title: 'Material Design/Card',
  component: Card,
  decorators: [
    moduleMetadata({
      imports: [
        Card,
        CardHeader,
        CardTitle,
        CardAction,
        CardDescription,
        CardContent,
        CardFooter
      ]
    })
  ]
};

export default meta;

export type Story = StoryObj<Card>;

export const variants: Story = {
  render: () => ({
    template: `
      <ui-card>
        Card Component
      </ui-card>
    `,
  }),
};

export const simpleCard: Story = {
  render: () => ({
    template: `
      <ui-card>
        <ui-card-content>Content</ui-card-content>
      </ui-card>
    `
  })
};

export const advancedCard: Story = {
  render: () => ({
    template: `
      <ui-card>
        <ui-card-header>
          <ui-card-action>Action</ui-card-action>
        </ui-card-header>
        <ui-card-content>
          <ui-card-title>Title</ui-card-title>
          <ui-card-description>Description</ui-card-description>
        </ui-card-content>
        <ui-card-footer>Footer</ui-card-footer>
      </ui-card>
    `,
  }),
};