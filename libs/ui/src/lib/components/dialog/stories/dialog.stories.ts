import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { 
  Dialog, 
  DialogOverlay, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@smartcase/ui";
import { Button } from "@smartcase/ui";
import { CommonModule } from "@angular/common";
import { NgpDialogTrigger } from "ng-primitives/dialog";

const meta: Meta<Dialog> = {
  title: 'Material Design/Dialog',
  component: Dialog,
  decorators: [
    moduleMetadata({
      imports: [
        Button,
        DialogOverlay,
        Dialog,
        DialogHeader,
        DialogTitle,
        DialogDescription,
        DialogFooter,
        CommonModule,
        NgpDialogTrigger
      ]
    })
  ]
};

export default meta;

export type Story = StoryObj<Dialog>;

export const dialog: Story = {
  render: () => ({
    template: `
      <ui-button [ngpDialogTrigger]="dialog">
        Dialog
      </ui-button>
      <ng-template #dialog let-close="close">
        <ui-dialog-overlay>
          <ui-dialog>
            <ui-dialog-header>
              <ui-dialog-title>
                Publish this article?
              </ui-dialog-title>
              <ui-dialog-description>
                Are you sure you want to publish this article? This action is irreversible.
              </ui-dialog-description>
            </ui-dialog-header>
            <ui-dialog-footer>
              <ui-button variant="text" (click)="close()">Cancel</ui-button>
              <ui-button variant="text" (click)="close()">Accept</ui-button>
            </ui-dialog-footer>
          </ui-dialog>
        </ui-dialog-overlay>
      </ng-template>
    `
  })
}