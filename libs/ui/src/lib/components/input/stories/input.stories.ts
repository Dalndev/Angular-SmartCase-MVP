import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Input } from "../input";
import { CommonModule } from "@angular/common";

const meta: Meta<Input> = {
  title: 'Drafts/Input',
  component: Input,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Input
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Input>;

export const input: Story = {
  render: () => ({
    template: ``
  })
}
