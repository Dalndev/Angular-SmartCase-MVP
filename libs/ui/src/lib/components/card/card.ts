import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { cn, tv, VariantProps } from 'tailwind-variants';

const card = tv({
  base: 'relative text-start w-full mx-auto h-max py-[16px] flex flex-col rounded-[12px] border border-outline-variant has-[ui-card-footer]:pb-0 has-[ui-card-header]:pt-0',
  slots: {
    action:
      'relative self-end rounded-full inline-flex items-center justify-center whitespace-nowrap size-[40px] [--ng-icon__size:24px] text-on-surface-variant outline-0 outline-transparent data-hover:[&>span]:bg-primary-state-layer-light-low data-press:[&>span]:bg-primary-state-layer-light data-focus-visible:outline-3 data-focus-visible:outline-offset-2 data-focus-visible:outline-outline overflow-hidden',
    header:
      'relative pl-[16px] py-[12px] pr-[4px] rounded-t-[12px] inline-flex flex-row justify-between items-center',
    headline: 'block inline-flex flex-col',
    title: 'text-[16px] font-medium text-on-surface',
    description: 'text-[14px] font-normal text-on-surface-variant',
    content:
      'text-[14px] px-[16px] font-normal inline-flex flex-col gap-[32px] text-on-surface-variant whitespace-normal',
    footer: 'p-[16px] flex items-center rounded-b-[12px] gap-[8px]',
  },
  variants: {
    variant: {
      elevated:
        'bg-surface-container-low shadow-elevation-light-lowest text-on-surface',
      filled: 'bg-surface-container-highest text-on-surface-variant',
      outlined:
        'bg-surface border border-outline-variant text-on-surface-variant',
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
});

const { base, header, headline, title, description, action, content, footer } =
  card();

export type Variants = VariantProps<typeof card>;

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
  get klass() {
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
  get klass() {
    return header({ variant: this.variant });
  }
}

@Component({
  selector: 'ui-card-action',
  imports: [CommonModule],
  template: `
    <span
      class="absolute top-0 left-0 w-full h-full pointer-events-none"
    ></span>
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
  get klass() {
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
  get klass() {
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
  get klass() {
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
  get klass() {
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
  get klass() {
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
  get klass() {
    return footer({ variant: this.variant });
  }
}
