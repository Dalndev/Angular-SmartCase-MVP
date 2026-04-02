import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Field, FieldDescription, FieldError, FieldLabel } from "../field";
import { CommonModule } from "@angular/common";

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
        FieldError
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
        <ui-field-label>Full Name</ui-field-label>
        <ui-field-description>Please include any middle names, no matter how ridiculous.</ui-field-description>
        <ui-field-content>
          
        </ui-field-content>
        <ui-field-error>This field is required.</ui-field-error>
      </ui-field>

    `
  })
}
