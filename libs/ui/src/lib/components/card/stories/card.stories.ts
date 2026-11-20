import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardHeadline, CardTitle } from "../card";
import { Button } from "@smartcase/ui";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matMoreVertOutline } from "@ng-icons/material-icons/outline";

const meta: Meta<Card> = {
  title: 'Material Design/Card',
  component: Card,
  decorators: [
    moduleMetadata({
      imports: [
        Card,
        CardHeader,
        CardHeadline,
        CardTitle,
        CardAction,
        CardDescription,
        CardContent,
        CardFooter,
        Button,
        NgIcon
      ],
      providers: [provideIcons({ matMoreVertOutline })],
    }),
  ],
};

export default meta;

export type Story = StoryObj<Card>;

export const variants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-row gap-[24px]">
        <ui-card class="w-[300px]" variant="outlined">
          <ui-card-header>
            <div class="inline-flex flex-col gap-[4px] text-[14px]">
              <p class="font-medium text-on-surface">Header</p>
              <p class="text-on-surface">SubHead</p>
            </div>
            <ui-card-action>
            <ng-icon name="matMoreVertOutline"/>
          </ui-card-action>
          </ui-card-header>
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              class="relative z-20 aspect-video w-full object-cover brightness-200 grayscale"
            />
          <ui-card-content>
            <ui-card-headline>
              <ui-card-title>Outlined</ui-card-title>
              <ui-card-description>Description for elevated card</ui-card-description>
            </ui-card-headline>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </ui-card-content>
          <ui-card-footer>
            <ui-button variant="outlined">Secondary</ui-button>
            <ui-button>Primary</ui-button>
          </ui-card-footer>
        </ui-card>
        <ui-card class="w-[300px]" variant="filled">
          <ui-card-header>
            <div class="inline-flex flex-col gap-[4px] text-[14px]">
              <p class="font-medium text-on-surface">Header</p>
              <p class="text-on-surface">SubHead</p>
            </div>
            <ui-card-action>
            <ng-icon name="matMoreVertOutline"/>
          </ui-card-action>
          </ui-card-header>
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              class="relative z-20 aspect-video w-full object-cover brightness-200 grayscale"
            />
          <ui-card-content>
            <ui-card-headline>
              <ui-card-title>Filled</ui-card-title>
              <ui-card-description>Description for elevated card</ui-card-description>
            </ui-card-headline>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </ui-card-content>
          <ui-card-footer>
            <ui-button variant="outlined">Secondary</ui-button>
            <ui-button>Primary</ui-button>
          </ui-card-footer>
        </ui-card>   
        <ui-card class="w-[300px]">
          <ui-card-header>
            <div class="inline-flex flex-col gap-[4px] text-[14px]">
              <p class="font-medium text-on-surface">Header</p>
              <p class="text-on-surface">SubHead</p>
            </div>
            <ui-card-action>
            <ng-icon name="matMoreVertOutline"/>
          </ui-card-action>
          </ui-card-header>
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              class="relative z-20 aspect-video w-full object-cover brightness-200 grayscale"
            />
          <ui-card-content>
            <ui-card-headline>
              <ui-card-title>Elevated</ui-card-title>
              <ui-card-description>Description for elevated card</ui-card-description>
            </ui-card-headline>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </ui-card-content>
          <ui-card-footer>
            <ui-button variant="outlined">Secondary</ui-button>
            <ui-button>Primary</ui-button>
          </ui-card-footer>
        </ui-card>
      </div>
    `,
  }),
};

export const advancedCard: Story = {
  render: () => ({
    template: `
      <ui-card class="w-[300px]">
        <ui-card-header>
          <div class="inline-flex flex-col gap-[4px] text-[14px]">
            <p class="font-medium text-on-surface">Header</p>
            <p class="text-on-surface">SubHead</p>
          </div>
          <ui-card-action>
          <ng-icon name="matMoreVertOutline"/>
        </ui-card-action>
        </ui-card-header>
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            class="relative z-20 aspect-video w-full object-cover brightness-200 grayscale"
          />
        <ui-card-content>
          <ui-card-headline>
            <ui-card-title>Outlined</ui-card-title>
            <ui-card-description>Description for elevated card</ui-card-description>
          </ui-card-headline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </ui-card-content>
        <ui-card-footer>
          <ui-button variant="outlined">Secondary</ui-button>
          <ui-button>Primary</ui-button>
        </ui-card-footer>
      </ui-card>
    `,
  }),
};