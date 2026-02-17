import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Tag } from '../tag';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { CommonModule } from "@angular/common";
import { matCloseOutline, matLabelImportantOutline } from "@ng-icons/material-icons/outline";

const meta: Meta<Tag> = {
  title: 'Material Design/Tag',
  component: Tag,
  decorators: [
    moduleMetadata({
      imports: [
        NgIcon,
        CommonModule
      ],
      providers: [
        provideIcons({ matLabelImportantOutline, matCloseOutline })
      ]
    })
  ]
};

export default meta;

export type Story = StoryObj<Tag>;

export const variants: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4 justify-center items-center">
        <ui-tag>Primary</ui-tag>
        <ui-tag variant="secondary">Secondary</ui-tag>
        <ui-tag variant="outline">Outline</ui-tag>
      </div>
    `
  })
}

export const icons: Story = {
  render: () => ({
    template: `
      <div class="flex gap-4 justify-center items-center">
        <ui-tag>
          <ng-icon name="matLabelImportantOutline" slot="leading"/>  
          Leading
        </ui-tag>
        <ui-tag>
          Trailing
          <ng-icon name="matCloseOutline" slot="trailing"/>
        </ui-tag>
      </div>
    `
  })
}