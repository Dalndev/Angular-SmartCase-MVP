import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Virtualizer } from "../virtualizer";
import { CommonModule } from "@angular/common";

const meta: Meta<Virtualizer> = {
  title: 'Drafts/Virtualizer',
  component: Virtualizer,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Virtualizer
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Virtualizer>;

export const virtualizer: Story = {
  render: () => ({
    template: ``
  })
}
