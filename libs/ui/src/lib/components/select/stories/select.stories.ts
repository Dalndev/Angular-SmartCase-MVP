import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Select, SelectContent, SelectItem, SelectValue } from "../select";
import { CommonModule } from "@angular/common";
import { NgpSelectOption, NgpSelectPortal, provideSelectState } from "ng-primitives/select";
import { Field, FieldDescription, FieldError, FieldLabel } from "../../field/field";

const meta: Meta<Select> = {
  title: 'Material Design/Select',
  component: Select,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Field,
        FieldLabel,
        FieldDescription,
        FieldError,
        Select,
        SelectValue,
        SelectContent,
        SelectItem,
        NgpSelectPortal,
        NgpSelectOption
      ],
      providers:[
        provideSelectState()
      ]
    })
  ]
};

export default meta;

type Story = StoryObj<Select>;

export const select: Story = {
  render: () => ({
    template: `
      <ui-field variant="filled">        
        <ui-select>
          <ui-select-value/>
          <ui-select-content *ngpSelectPortal>
            <div ui-select-item ngpSelectOptionValue="Item 1" ngpSelectOption>Item 1</div>
            <div ui-select-item ngpSelectOptionValue="Item 2" ngpSelectOption>Item 2</div>
            <div ui-select-item ngpSelectOptionValue="Item 3" ngpSelectOption>Item 3</div>
          </ui-select-content>
        </ui-select>
        <label ui-field-label>Select</label>
      </ui-field>
    `
  })
}
