import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { Snackbar } from '../snackbar'
import { Button } from "../../button";
import { CommonModule } from "@angular/common";

const meta: Meta<Snackbar> = {
  title: 'Material Design/Snackbar',
  component: Snackbar,
  decorators: [
    moduleMetadata({
      imports: [
        Button,
        Snackbar,
        CommonModule
      ]
    })
  ]
}

export default meta;

type Story = StoryObj<Snackbar>;

export const snackbar: Story = {
  name: 'Snackbar',
  render: () => ({
    template: `
      <ui-button>Show Toast</ui-button>
      <ui-snackbar>
        Single-line snackbar with action.
        <ng-template #action>
          Action...
        </ng-template>
      </ui-snackbar>
    `
  })
}