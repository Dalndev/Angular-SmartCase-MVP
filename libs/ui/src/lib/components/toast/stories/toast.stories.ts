import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Toast } from "../toast";
import { CommonModule } from "@angular/common";

const meta: Meta<Toast> = {
  title: 'Drafts/Toast',
  component: Toast,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Toast
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Toast>;

export const toast: Story = {
  render: () => ({
    template: ``
  })
}
