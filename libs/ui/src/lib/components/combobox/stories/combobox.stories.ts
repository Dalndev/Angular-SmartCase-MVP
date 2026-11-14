import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { ComboBox } from "../combobox";
import { CommonModule } from "@angular/common";

const meta: Meta<ComboBox> = {
  title: 'Drafts/ComboBox',
  component: ComboBox,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ComboBox
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<ComboBox>;

export const comboBox: Story = {
  render: () => ({
    template: ``
  })
}
