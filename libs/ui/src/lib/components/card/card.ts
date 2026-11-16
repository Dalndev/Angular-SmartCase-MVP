import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { cn } from 'tailwind-variants';
import { Variants } from './dtypes/card.dtypes';
import { action, base, content, description, footer, header, headline, title } from './styles/card.styles';


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
    return header({ variant: this.variant });
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
    return action({ variant: this.variant });
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
    return headline({ variant: this.variant });
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
    return title({ variant: this.variant });
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
    return description({ variant: this.variant });
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
    return content({ variant: this.variant });
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
    return footer({ variant: this.variant });
  }
}
