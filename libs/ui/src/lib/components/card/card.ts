import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { cn } from 'tailwind-variants';
import { Variants } from './dtypes/card.dtypes';
import { cardAction, base, cardContent, cardDescription, cardFooter, cardHeader, cardHeadline, cardTitle } from './styles/card.styles';

/**
 * @author Dalndev
 * 
 * @description A card is a surface with its own background and outline that holds one subject: a title with a short description under it, an optional action in the top corner, the body, and a footer for the buttons. Reach for it when a block has to stand on its own, like a login form, a pricing plan or an upcoming event.
 * 
 * @see {@link https://m3.material.io/components/cards/overview | Material Design - Card}
 * @see {@link https://www.shadcn.io/ui/card | Shadcn - Card}
 */
@Component({
  selector: 'ui-card',
  imports: [CommonModule],
  template: ` <ng-content /> `,
})
export class Card {
  @Input() variant: Variants['variant'];

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ alias: 'class' }) clazz!: string;

  @HostBinding('class')
  get styles() {
    return cn(base({ variant: this.variant }), this.clazz);
  }
}

@Component({
  selector: 'ui-card-header',
  imports: [CommonModule],
  template: ` <ng-content /> `,
})
export class CardHeader {
  @Input() variant: Variants['variant'];

  @HostBinding('class')
  get styles() {
    return cardHeader({ variant: this.variant });
  }
}

@Component({
  selector: 'ui-card-action',
  imports: [CommonModule],
  template: `
    <span class="absolute top-0 left-0 w-full h-full pointer-events-none"></span>
    <ng-content />
  `,
  hostDirectives: [{ directive: NgpButton }],
  host: {
    role: 'button',
  },
})
export class CardAction {
  @Input() variant: Variants['variant'];

  @HostBinding('class')
  get styles() {
    return cardAction({ variant: this.variant });
  }
}

@Component({
  selector: 'ui-card-headline',
  imports: [CommonModule],
  template: ` <ng-content /> `,
})
export class CardHeadline {
  @Input() variant: Variants['variant'];

  @HostBinding('class')
  get styles() {
    return cardHeadline({ variant: this.variant });
  }
}

@Component({
  selector: 'ui-card-title',
  imports: [CommonModule],
  template: ` <ng-content /> `,
})
export class CardTitle {
  @Input() variant: Variants['variant'];

  @HostBinding('class')
  get styles() {
    return cardTitle({ variant: this.variant });
  }
}

@Component({
  selector: 'ui-card-description',
  imports: [CommonModule],
  template: ` <ng-content /> `,
})
export class CardDescription {
  @Input() variant: Variants['variant'];

  @HostBinding('class')
  get styles() {
    return cardDescription({ variant: this.variant });
  }
}

@Component({
  selector: 'ui-card-content',
  imports: [CommonModule],
  template: ` <ng-content /> `,
})
export class CardContent {
  @Input() variant: Variants['variant'];

  @HostBinding('class')
  get styles() {
    return cardContent({ variant: this.variant });
  }
}

@Component({
  selector: 'ui-card-footer',
  imports: [CommonModule],
  template: ` <ng-content /> `,
})
export class CardFooter {
  @Input() variant: Variants['variant'];

  @HostBinding('class')
  get styles() {
    return cardFooter({ variant: this.variant });
  }
}
