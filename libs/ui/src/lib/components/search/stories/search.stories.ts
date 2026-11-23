import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matCloseOutline } from "@ng-icons/material-icons/outline";
import { Search } from "../search";

const meta: Meta<Search> = {
  title: 'Material Design/Search',
  component: Search,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        Search,
        NgIcon
      ],
      providers: [provideIcons({ matCloseOutline })]
    })
  ]
};

export default meta;

type Story = StoryObj<Search>;

export const search: Story = {
  name: 'Search',
  render: () => ({
    template: `
      <div class="flex justify-center items-center gap-2">
        <ui-search>
          <ng-icon slot="leading" name="matCloseOutline"/>
        </ui-search>
      </div>
    `
  })
}