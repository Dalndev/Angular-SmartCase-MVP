import { Component } from "@angular/core";
import { Avatar } from "@smartcase/ui";
import { tv } from "tailwind-variants";

const classes = tv({
  base: 'flex justify-end pt-[10px] pb-[10px]'
})

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [Avatar],
  host: {
    '[class]': 'klass'
  }
})
export class Header { 
  get klass() {
    return classes()
  }
}