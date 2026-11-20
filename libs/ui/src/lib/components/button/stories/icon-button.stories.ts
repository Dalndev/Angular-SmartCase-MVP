import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Button } from "@smartcase/ui";
import { CommonModule } from "@angular/common";
import { NgpButton } from "ng-primitives/button";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matPersonOutline, matSettingsOutline } from "@ng-icons/material-icons/outline";

const meta: Meta<Button> = {
  title: 'Material Design/Buttons/Icon Button',
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule, NgpButton, NgIcon
      ],
      providers: [
        provideIcons({ matPersonOutline, matSettingsOutline })
      ]
    })
  ]
};

export default meta;

export type Story = StoryObj<Button>;

export const sizes: Story = {
  name: "Sizes",
  args: {},
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-button size="icon-xs">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button size="icon-sm">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button size="icon-md">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button size="icon-lg">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button size="icon-xl">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
      </div>
    `,
  }),
};

export const variants: Story = {
  name: 'Variants',
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-button variant="elevated" size="icon-sm">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button variant="filled" size="icon-sm">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button variant="tonal" size="icon-sm">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button variant="outlined" size="icon-sm">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
        <ui-button variant="text" size="icon-sm">
          <ng-icon slot="trailing" name="matSettingsOutline"/>
        </ui-button>
      </div>
    `
  })
};