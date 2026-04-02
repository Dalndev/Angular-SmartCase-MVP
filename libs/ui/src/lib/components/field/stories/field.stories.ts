import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Field } from "../field";
import { CommonModule } from "@angular/common";

const meta: Meta<Field> = {
  title: 'Drafts/Field',
  component: Field,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Field
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Field>;

export const field: Story = {
  render: () => ({
    template: ``
  })
}
