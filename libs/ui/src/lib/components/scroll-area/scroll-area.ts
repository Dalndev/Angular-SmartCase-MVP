import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { cn, tv } from 'tailwind-variants';

const classes = tv({
  slots: {
    container: 'relative',
    viewport: '',
    scrollbar: '',
  },
});

const { container, viewport, scrollbar } = classes();

@Component({
  selector: 'ui-scroll-area-viewport',
  template: `<ng-content />`,
  imports: [CommonModule],
})
export class ScrollViewport {

  @HostBinding('class')
  get klasses() {
    return viewport();
  }
}

@Component({
  selector: 'ui-scroll-bar',
  template: ``,
  imports: [CommonModule],
})
export class Scrollbar {
  @HostBinding('class')
  get klasses() {
    return scrollbar();
  }
}

@Component({
  selector: 'ui-scroll-area',
  template: `
    <ui-scroll-area-viewport>
      <ng-content />
      <ui-scroll-bar />
    </ui-scroll-area-viewport>
  `,
  imports: [CommonModule, ScrollViewport, Scrollbar],
})
export class ScrollArea {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ alias: 'class' }) klass = '';

  @HostBinding('class')
  get klasses() {
    return cn(container(), this.klass);
  }
}
