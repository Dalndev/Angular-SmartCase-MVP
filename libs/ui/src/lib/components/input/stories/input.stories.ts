import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Input } from "../input";
import { Field, FieldDescription, FieldError, FieldLabel } from "../../field";

const meta: Meta<Input> = {
  title: 'Material Design/Input',
  component: Input,
  decorators: [
    moduleMetadata({
      imports: [
        Input,
        Field,
        FieldLabel,
        FieldDescription,
        FieldError
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Input>;

export const input: Story = {
  name: 'Input',
  render: () => ({
    template: `
      <ui-field>
        <input ui-input />
        <label ui-field-label>Full Name</label>
        <span ui-field-description>Max 10 characters</span>
      </ui-field>
    `
  })
}