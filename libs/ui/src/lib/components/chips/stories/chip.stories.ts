import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matCheckOutline, matCloseOutline } from '@ng-icons/material-icons/outline';
import { CommonModule } from '@angular/common';
import { Chip } from '../chips';

const meta: Meta<Chip> = {
  title: 'Material Design/Chips/Chip',
  component: Chip,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, NgIcon],
      declarations: [],
      providers: [provideIcons({ matCheckOutline, matCloseOutline })]
    })
  ]
}

export default meta;

type Story = StoryObj<Chip>;

export const variants: Story = {
  name: 'Variants',
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-chip variant="outlined">Outlined</ui-chip>
        <ui-chip variant="elevated">Elevated</ui-chip>
        <ui-chip [disabled]="true">Disabled</ui-chip>
      </div>
    `
  })
}

export const withIcons: Story = {
  name: "Icons",
  render: () => ({
    template: `
      <div class="flex flex-row gap-2 justify-center items-center">
        <ui-chip variant="outlined">
          <ng-icon slot="leading" name="matCheckOutline"/>
          Leading
        </ui-chip>
        <ui-chip variant="elevated">
          <ng-icon slot="trailing" name="matCloseOutline"/>
          Trailing
        </ui-chip>
      </div>
    `
  })
}