import { Component, HostBinding, Input } from "@angular/core";
import { NgpAvatar, NgpAvatarFallback, NgpAvatarImage } from "ng-primitives/avatar";
import { avatarStyles, avatarGroupStyles } from "./styles/avatar.styles";
import { AvatarVariants } from "./dtypes/avatar.dtypes";
import { CommonModule } from "@angular/common";

const DEFAULT_FALLBACK = 'UU';

/**
 * @todo performance. Implementar la directiva NgOptimizedImage, para la carga diferida (lazy) de archivos multimedia en el sistema.
 * @todo feat. Implementar la propiedad Badge en el elemento avatar para seguimiento del estado actual del usuario en el sistema.
 * @todo feat. Implementar el componente Count para presentar un feedback al usuario de la cantidad de usuarios agrupados en el elemento AvatarGroup.
 */

/**
 * @author Dalndev
 * 
 * @description An image element with a fallback for representing the user.
 * 
 * @see {@link https://m3.material.io/components/lists/specs | List (Avatar)}
 * @see {@link https://angularprimitives.com/primitives/avatar | Angular Primitives - Avatar}
 * @see {@link https://ui.shadcn.com/docs/components/base/avatar | Shadcn - Avatar}
 */
@Component({
  selector: 'ui-avatar',
  imports: [NgpAvatarImage, NgpAvatarFallback],
  hostDirectives: [NgpAvatar],
  template: `
    @if(url) {
      <img 
        ngpAvatarImage
        [src]="url"
        [alt]=""
      />
    }

    <span ngpAvatarFallback>{{ fallback }}</span>
  `,
  host: {
    'data-slot': 'avatar'
  }
})
export class Avatar { 
  @Input() size: AvatarVariants['sizes'] = 'md'

  @Input() url: string | null = null;

  @Input() fallback = DEFAULT_FALLBACK;

  @HostBinding('class')
  get styles() {
    return avatarStyles({ sizes: this.size })
  }
}

/**
 * @author Dalndev
 * 
 * @description Use the AvatarGroup component to add a group of avatars.
 */
@Component({
  selector: 'ui-avatar-group',
  imports: [CommonModule],
  template: `
    <ng-content/>
  `,
  host: {
    'data-slot': 'avatar-group'
  }
})
export class AvatarGroup {
  @HostBinding('class')
  get styles() {
    return avatarGroupStyles()
  }
}