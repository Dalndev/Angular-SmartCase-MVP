import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Snackbar } from '../snackbar'
import { Button } from "../../button";
import { CommonModule } from "@angular/common";
import { APP_INITIALIZER, inject, Injector, Provider } from "@angular/core";
import { NgpToastManager } from "ng-primitives/toast";

const meta: Meta<Snackbar> = {
  title: 'Material Design/Snackbar',
  component: Snackbar,
  decorators: [
    moduleMetadata({
      imports: [
        Button,
        Snackbar,
        CommonModule
      ],
      providers: [provideNgpToast()]
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

function showSnackbar(injector: Injector) {
  injector.get(NgpToastManager)
    .show(Snackbar, {
      context: {
        content: 'Hello from snackbar.'
      }
    });
}

function injectStoryContext() {
  return
}

function provideNgpToast(): Provider[] {
  return [{ provide: APP_INITIALIZER, useFactory: injectStoryContext, deps: [Injector] }]
}