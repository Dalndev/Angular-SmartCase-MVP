import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    menu: 
      'fixed min-w-[112px] w-max max-w-[280px] h-max rounded-[16px] flex flex-col gap-[2px] py-[8px] px-[4px] bg-surface-container-low text-on-surface shadow-elevation-light-medium overflow-auto',
    menuItem: 
      'relative overflow-hidden min-w-[112px] w-full h-[48px] w-full rounded-[12px] inline-flex justify-start items-center px-[12px] bg-surface-container-low [--ng-icon__size:20px] [--ng-icon__color:var(--on-surface-variant)] *:[[slot="leading"]]:mr-[12px] *:[[slot="trailing"]]:ml-[12px] data-hover:[&>span]:bg-on-surface-variant-state-layer-light-low',
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