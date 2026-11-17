import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FilterChip } from '../chips';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matCheckOutline, matCloseOutline, matDirectionsCarOutline, matPeopleOutline } from '@ng-icons/material-icons/outline';
import { CommonModule } from '@angular/common';

const meta: Meta<FilterChip> = {
  title: 'Material Design/Chips/Filter Chip',
  component: FilterChip,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgIcon],
      declarations: [],
      providers: [provideIcons({ matCheckOutline, matCloseOutline, matPeopleOutline, matDirectionsCarOutline })]
    })
  ]
}

export default meta;

type Story = StoryObj<FilterChip>;

export const variants: Story = {
  name: 'Variants',
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-filter-chip variant="outlined">Outlined</ui-filter-chip>
        <ui-filter-chip variant="elevated">Elevated</ui-filter-chip>
        <ui-filter-chip [disabled]="true">Disabled</ui-filter-chip>
      </div>
    `
  })
}

export const withIcons: Story = {
  name: "Icons",
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-filter-chip variant="outlined">
          <ng-icon slot="leading" name="matDirectionsCarOutline"/>
          Leading
        </ui-filter-chip>
        <ui-filter-chip variant="elevated">
          <ng-icon slot="leading" name="matPeopleOutline"></ng-icon>
          Filter
        </ui-filter-chip>
      </div>
    `
  })
}
