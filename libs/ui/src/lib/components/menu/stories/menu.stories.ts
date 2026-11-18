import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Menu, MenuItem } from "../menu";
import { CommonModule } from "@angular/common";
import { Button } from "../../button";
import { NgpMenuTrigger } from "ng-primitives/menu";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matContentCopyOutline, matEditOutline } from "@ng-icons/material-icons/outline";

const meta: Meta<Menu> = {
  title: 'Material Design/Menu',
  component: Menu,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Menu,
        MenuItem,
        Button,
        NgpMenuTrigger,
        NgIcon
      ],
      providers: [provideIcons({ matContentCopyOutline, matEditOutline })]
    })
  ]
};

export default meta;

type Story = StoryObj<Menu>;

export const menu: Story = {
  render: () => ({
    template: `
      <ui-button [ngpMenuTrigger]="menu" ngpMenuTriggerOffset="14">Menu</ui-button>
        <ng-template #menu>
          <ui-menu>
            <button ui-menu-item>
              <ng-icon slot="leading" name="matContentCopyOutline"/>
              Label
            </button>
            <button ui-menu-item>
              <ng-icon slot="leading" name="matEditOutline"/>
              Label
            </button>
          </ui-menu>
        </ng-template>
    `
  })
}
