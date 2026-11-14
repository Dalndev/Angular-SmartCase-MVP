import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Popover } from "../popover";
import { CommonModule } from "@angular/common";

const meta: Meta<Popover> = {
  title: 'Drafts/Popover',
  component: Popover,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Popover
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Popover>;

export const popover: Story = {
  render: () => ({
    template: ``
  })
}
