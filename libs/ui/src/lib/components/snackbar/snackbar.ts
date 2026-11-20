import { Component, ContentChild, TemplateRef } from "@angular/core";
import { styles } from "./styles/snackbar.styles";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matCloseOutline } from "@ng-icons/material-icons/outline";
import { CommonModule } from "@angular/common";
import { injectToastContext, NgpToast } from "ng-primitives/toast";
import { Button } from "@smartcase/ui";

const ACTION_TEMPLATE = "action"; 

interface ISnackbar {
  content: string | null;
  closeable: boolean;
}

/**
 * @author Dalndev
 * 
 * @description Show short updates about app processes at the bottom of the screen
 * 
 * @see {@link https://angularprimitives.com/primitives/toast | Angular Primitives - Toast}
 * @see {@link https://www.shadcn.io/ui/toast | Shadcn - Toast}
 * @see {@link https://m3.material.io/components/snackbar/specs | Material Design - Snackbar}
 */
@Component({
  selector: 'ui-snackbar',
  imports: [NgIcon, Button, CommonModule],
  providers: [provideIcons({ matCloseOutline })],
  hostDirectives: [NgpToast],
  template: `
    <div class="min-h-[48px] max-h-[68px] min-w-[344px] max-w-[672px] pe-[8px] rounded-[4px] bg-inverse-surface text-inverse-on-surface shadow-elevation-light-medium">
      <div data-slot="snackbar" class="flex items-center">
        <span 
          data-slot="snackbar-label" 
          class="w-full max-h-[48px] py-[14px] ps-[16px] pe-[8px]"
        >
          {{ context.content }}
        </span>
        <!-- <ng-container [ngTemplateOutlet]="actionTemplate" /> -->
        @if (context.closeable) {
          <ui-button 
            size="icon-sm" 
            variant="text"
            data-slot="snackbar-close"
            buttonStyles="text-on-inverse-surface"
          >
            <ng-icon slot="trailing" name="matCloseOutline"/>
          </ui-button>
        }
      </div>
    </div>
  `,
  host: { 
    '[class]': 'styles',
  }
})
export class Snackbar { 
  protected readonly context = injectToastContext<ISnackbar>();

  // private readonly toast = inject(NgpToast);
  // private readonly toastManager = inject(NgpToastManager)

  @ContentChild(ACTION_TEMPLATE) actionTemplate !: TemplateRef<unknown>;

  get styles() {
    return styles()
  }
}