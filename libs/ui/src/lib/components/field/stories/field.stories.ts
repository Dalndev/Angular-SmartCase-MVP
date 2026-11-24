import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { NgpFormControl } from "ng-primitives/form-field";
import { Field, FieldDescription, FieldError, FieldLabel } from "../field";
import { Input } from "../../input";

const meta: Meta<Field> = {
  title: 'Material Design/Field',
  component: Field,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Field,
        FieldLabel,
        FieldDescription,
        FieldError,
        Input,
        NgpFormControl
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Field>;

export const field: Story = {
  render: () => ({
    template: `
      <ui-field input="text">
        <input ui-input />
        <label ui-field-label>Full Name</label>
        <span ui-field-description>Max 10 characters</span>
      </ui-field>
    `
  })
}
