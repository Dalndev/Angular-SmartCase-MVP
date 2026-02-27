import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'ui-scroll-area',
  template: `<ng-content/>`,
  imports: [CommonModule]
})
export class ScrollArea { }

@Component({
  selector: 'ui-scroll-area-viewport',
  template: ``,
  imports: [CommonModule]
})
export class ScrollViewport { }

@Component({
  selector: 'ui-scroll-bar',
  template: ``,
  imports: [CommonModule]
})
export class Scrollbar { }

@Component({
  selector: 'ui-scroll-thumb',
  template: ``,
  imports: [CommonModule]
})
export class ScrollThumb { }

@Component({
  selector: 'ui-scroll-corner',
  template: ``,
  imports: [CommonModule]
})
export class ScrollCorner { }