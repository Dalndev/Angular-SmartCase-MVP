import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { NavigationRail, NavigationContent, NavigationFooter, NavigationHeader, NavigationItem, NavigationItemLabel, NavigationList } from "../navigation";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matCreateOutline, matMenuOpenOutline, matSettingsOutline, matStarOutline } from "@ng-icons/material-icons/outline";
import { Button } from "../../button";
import { FAB } from "../../fab/fab";

const meta: Meta<Navigation> = {
  title: 'Material Design/Navigation',
  component: Navigation,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NavigationRail,
        NavigationList,
        NavigationItem,
        NavigationItemLabel,
        NavigationHeader,
        NavigationContent,
        NavigationFooter,
        NgIcon,
        Button,
        FAB
      ],
      providers: [provideIcons({ matStarOutline, matCreateOutline, matMenuOpenOutline, matSettingsOutline })]
    })
  ]
}

export default meta;

type Story = StoryObj<Navigation>;

export const navigation: Story = {
  name: 'Navigation',
  render: () => ({
    template: `
      <div class="h-[800px] w-full">
        <ui-navigation-rail>
          <ui-navigation-header>
            <ui-button variant="text" size="icon-sm">
              <ng-icon name="matMenuOpenOutline"/>
            </ui-button>
            <ui-fab>
              <ng-icon name="matCreateOutline"/>
            </ui-fab>
          </ui-navigation-header>
          <ui-navigation-content>
            <ui-navigation-list>
              <ui-navigation-item>
                <ui-button variant="text" size="icon-sm">
                  <ng-icon name="matStarOutline"/>
                </ui-button>
                <label ui-navigation-item-label>Label</label>
              </ui-navigation-item>
              <ui-navigation-item>
                <ui-button variant="text" size="icon-sm">
                  <ng-icon name="matStarOutline"/>
                </ui-button>
                <label ui-navigation-item-label>Label</label>
              </ui-navigation-item>
              <ui-navigation-item>
                <ui-button variant="text" size="icon-sm">
                  <ng-icon name="matStarOutline"/>
                </ui-button>
                <label ui-navigation-item-label>Label</label>
              </ui-navigation-item>
            </ui-navigation-list>
          </ui-navigation-content>
          <ui-navigation-footer>
            <ui-navigation-item>
              <ui-button variant="text" size="icon-sm">
                <ng-icon name="matSettingsOutline"/>
              </ui-button>
              <label ui-navigation-item-label>Settings</label>
            </ui-navigation-item>
          </ui-navigation-footer>
        </ui-navigation-rail>
      </div>
    `
  })
}