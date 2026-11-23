import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { TextArea } from "../textarea"
import { Field, FieldDescription, FieldError, FieldLabel } from "../../field";
import { Input } from "../../input";

const meta: Meta<TextArea> = {
  title: "Material Design/Textarea",
  component: TextArea,
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
}

export default meta

type story = StoryObj<TextArea>;

export const textarea: story = {
  name: 'Textarea',
  render: () => ({
    template: `
      <ui-field>
        <textarea ui-input ></textarea>
        <label ui-field-label>Description</label>
        <span ui-field-description>Fill with description</span>
      </ui-field>
    `
  })
}