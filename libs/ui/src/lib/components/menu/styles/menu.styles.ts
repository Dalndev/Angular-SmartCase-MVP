import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    menu: 
      'overflow-auto fixed min-w-[112px] min-w-[200px] w-max max-w-[280px] h-max rounded-[16px] pt-[8px] pb-[8px] px-[4px] flex flex-col gap-[2px] bg-surface-container-low text-on-surface shadow-elevation-light-medium',
    menuItem: 
      'relative overflow-hidden min-w-[112px] w-full h-[44px] rounded-[12px] pb-[8px] pt-[8px] px-[12px] inline-flex justify-start items-center text-label-large font-medium bg-surface-container-low text-on-surface [--ng-icon__color:var(--on-surface-variant)] [--ng-icon__size:20px] [&>[slot="leading"]]:mr-[12px] [&>[slot="trailing"]]:ml-[12px] data-hover:bg-tertiary-container data-hover:text-on-tertiary-container',
    menuSeparator: 
      '',
    menuBadge: 
      ''
  },
  variants: {
    variant: {
      standard: '',
      vibrant: ''
    }
  }
});

export const { 
  base,
  menu,
  menuItem,
  menuSeparator,
  menuBadge
} = styles()