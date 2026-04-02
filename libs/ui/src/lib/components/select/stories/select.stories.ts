import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Select } from "../select";
import { CommonModule } from "@angular/common";

const meta: Meta<Select> = {
  title: 'Drafts/Select',
  component: Select,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Select
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Select>;

export const select: Story = {
  render: () => ({
    template: ``
  })
}
