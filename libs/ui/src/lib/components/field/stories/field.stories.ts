import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Field, FieldDescription, FieldInput, FieldError, FieldLabel } from "../field";
import { CommonModule } from "@angular/common";
import { NgpFormControl } from "ng-primitives/form-field";
import { FloatingLabel } from "../../label/label";

const meta: Meta<Field> = {
  title: 'Drafts/Field',
  component: Field,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Field,
        FieldLabel,
        FieldDescription,
        FieldError,
        FieldInput,
        FloatingLabel,
        NgpFormControl
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Field>;

export const variants: Story = {
  render: () => ({
    template: `
      <ui-field variant="filled">        
        <input 
          ui-field-input      
        />
        <label ui-field-label>Full Name</label>
      </ui-field>

    `
  })
}
