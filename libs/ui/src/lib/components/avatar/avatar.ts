import { AfterContentInit, Component, HostBinding, Input, QueryList, ViewChildren } from "@angular/core";
import { NgpAvatar, NgpAvatarFallback, NgpAvatarImage } from "ng-primitives/avatar";
import { avatarStyles, avatarGroupStyles } from "./styles/avatar.styles";
import { AvatarVariants } from "./dtypes/avatar.dtypes";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'ui-avatar',
  imports: [NgpAvatarImage, NgpAvatarFallback],
  hostDirectives: [NgpAvatar],
  template: `
    @if(image) {
      <img 
        ngpAvatarImage
        [src]="image"
        [alt]=""
      />
    }

    <span ngpAvatarFallback>{{fallback}}</span>
  `,
})
export class Avatar { 
  @Input() size: AvatarVariants['sizes'] = 'md'

  @Input() shape: AvatarVariants['shapes'] = 'rounded';

  @Input() image: string | null = null;

  @Input() fallback = '';

  @HostBinding('class')
  get styles() {
    return avatarStyles({ sizes: this.size, shapes: this.shape })
  }
}

@Component({
  selector: 'ui-avatar-group',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `
})
export class AvatarGroup {
  @HostBinding('class')
  get styles() {
    return avatarGroupStyles()
  }
}