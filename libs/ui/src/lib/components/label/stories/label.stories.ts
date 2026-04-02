import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Label } from "../label";
import { CommonModule } from "@angular/common";

const meta: Meta<Label> = {
  title: 'Drafts/Label',
  component: Label,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Label
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Label>;

export const label: Story = {
  render: () => ({
    template: ``
  })
}
