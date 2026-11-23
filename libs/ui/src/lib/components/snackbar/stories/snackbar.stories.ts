import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { inject, Injector, provideAppInitializer } from "@angular/core";
import { NgpToastManager, provideToastConfig } from "ng-primitives/toast";
import { Snackbar } from "../snackbar";
import { Button } from "../../button";

let injector: Injector;

const meta: Meta<Snackbar> = {
  title: 'Material Design/Snackbar',
  component: Snackbar,
  decorators: [
    applicationConfig({
      providers: [
        provideAppInitializer(() => { injector = inject(Injector) }),
        provideToastConfig({
          placement: 'bottom-center',
          maxToasts: 3
        })
      ]
    }),
    moduleMetadata({
      imports: [
        Button,
        Snackbar,
        CommonModule
      ],
    })
  ]
}

export default meta;

type Story = StoryObj<Snackbar>;

export const snackbar: Story = {
  name: 'Snackbar',
  render: () => ({
    props: {
      showSnackbar
    },
    template: `
      <ui-button (btnClick)="showSnackbar()">Show Toast</ui-button>
    `
  })
}

function showSnackbar() {
  injector
    .get(NgpToastManager)
    .show(Snackbar, {
      context: {
        content: 'Hello from snackbar.'
      }
    });
}