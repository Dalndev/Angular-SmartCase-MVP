import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { tv, VariantProps } from "tailwind-variants";

const card = tv({
  base: 
    'bg-surface text-start p-[16px] w-max min-h-[80px] flex flex-col rounded-[12px] border border-outline-variant',
  slots: {
    action: 
      'left-0 top-0 absolute',
    header: 
      'relative inline-flex flex-col',
    title: 
      'text-[16px] font-semibold text-on-surface',
    description: 
      'text-[14px] font-normal text-on-surface-variant',
    content: 
      'text-[14px] font-normal text-on-surface-variant',
    footer: 
      '',
  },
  variants: {
    variant: {
      elevated: '',
      filled: '',
      outlined: '',
    },
  },
});

const { base, header, title, description, action, content, footer } = card();

export type Variants = VariantProps<typeof card>;

@Component({
  selector: 'ui-card',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `
})
export class Card {

  @Input() variant: Variants["variant"];

  @HostBinding('class')
  get klass() {
    return base({ variant: this.variant });
  }

}

@Component({
  selector: 'ui-card-header',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `
})
export class CardHeader {

  @Input() variant: Variants["variant"];

  @HostBinding('class')
  get klass() {
    return header({ variant: this.variant });
  }

}

@Component({
  selector: 'ui-card-action',
  imports: [CommonModule],
  template: `
    <button>
      <ng-content/>
    </button>
  `
})
export class CardAction {

  @Input() variant: Variants["variant"];

  @HostBinding('class')
  get klass() {
    return action({ variant: this.variant });
  }

}

@Component({
  selector: 'ui-card-title',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `
})
export class CardTitle {

  @Input() variant: Variants["variant"];

  @HostBinding('class')
  get klass() {
    return title({ variant: this.variant });
  }

}

@Component({
  selector: 'ui-card-description',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `
})
export class CardDescription {

  @Input() variant: Variants["variant"];

  @HostBinding('class')
  get klass() {
    return description({ variant: this.variant });
  }

}

@Component({
  selector: 'ui-card-content',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `
})
export class CardContent {

  @Input() variant: Variants["variant"];

  @HostBinding('class')
  get klass() {
    return content({ variant: this.variant });
  }

}

@Component({
  selector: 'ui-card-footer',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `
})
export class CardFooter {

  @Input() variant: Variants["variant"];

  @HostBinding('class')
  get klass() {
    return footer({ variant: this.variant });
  }

}