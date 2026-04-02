import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Tooltip } from "../tooltip";
import { CommonModule } from "@angular/common";

const meta: Meta<Tooltip> = {
  title: 'Drafts/Tooltip',
  component: Tooltip,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Tooltip
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Tooltip>;

export const tooltip: Story = {
  render: () => ({
    template: ``
  })
}
