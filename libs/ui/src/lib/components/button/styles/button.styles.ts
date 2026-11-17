import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'py-0 relative inline-flex items-center justify-center whitespace-nowrap text-base font-roboto font-medium transition-colors overflow-hidden disabled:bg-on-surface-variant-state-layer-light disabled:text-on-surface disabled:pointer-events-none',
  variants: {
    variants: {
      elevated:
        'bg-surface-container-low text-primary outline-0 outline-transparent data-hover:[&>span]:bg-primary-state-layer-light-low data-press:[&>span]:bg-primary-state-layer-light disabled:shadow-none focus:outline-3 focus:outline-offset-2 focus:outline-outline',
      filled:
        'bg-primary text-on-primary outline-0 outline-transparent data-hover:[&>span]:bg-on-primary-state-layer-light-low data-press:[&>span]:bg-on-primary-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline',
      tonal:
        'bg-secondary-container text-on-secondary-container outline-0 outline-transparent data-hover:[&>span]:bg-on-secondary-container-state-layer-light-low data-press:[&>span]:bg-on-secondary-container-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline ',
      outlined:
        'border text-on-surface-variant outline-0 outline-transparent border-outline-variant data-hover:[&>span]:bg-on-surface-variant-state-layer-light-low data-press:[&>span]:bg-on-surface-variant-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline',
      text:
        'text-primary outline-0 outline-transparent data-hover:[&>span]:bg-primary-state-layer-light-low data-press:[&>span]:bg-primary-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline',
      danger:
        'bg-error-container text-on-error-container outline-0 outline-transparent data-hover:[&>span]:bg-on-error-container-state-layer-light-low data-press:[&>span]:bg-on-error-container-state-layer-light focus:outline-3 focus:outline-offset-2 focus:outline-outline',
    },
    sizes: {
      xs:
        'h-[32px] px-[12px] py-[6px] text-[14px] [--ng-icon__size:20px] *:[[slot="leading"]]:mr-1 *:[[slot="trailing"]]:ml-1',
      sm:
        'h-[40px] px-[16px] py-[10px] text-[14px] [--ng-icon__size:20px] *:[[slot="leading"]]:mr-2 *:[[slot="trailing"]]:ml-2',
      md:
        'h-[56px] px-[24px] py-[16px] text-[16px] [--ng-icon__size:24px] *:[[slot="leading"]]:mr-2 *:[[slot="trailing"]]:ml-2',
      lg:
        'h-[96px] px-[48px] py-[32px] text-[24px] [--ng-icon__size:32px] *:[[slot="leading"]]:mr-3 *:[[slot="trailing"]]:ml-3',
      xl:
        'h-[136px] px-[64px] py-[48px] text-[32px] [--ng-icon__size:40px] *:[[slot="leading"]]:mr-4 *:[[slot="trailing"]]:ml-4',
      'icon-xs':
        'size-[32px] [--ng-icon__size:20px]',
      'icon-sm':
        'size-[40px] [--ng-icon__size:24px]',
      'icon-md':
        'size-[56px] [--ng-icon__size:24px]',
      'icon-lg':
        'size-[96px] [--ng-icon__size:32px]',
      'icon-xl':
        'size-[136px] [--ng-icon__size:40px]'
    },
    shapes: {
      rounded: 'rounded-full',
      squared: 'rounded-[12px]',
    },
  },
  defaultVariants: {
    sizes: 'sm',
    colors: 'primary',
    variants: 'filled',
    shapes: 'rounded',
  },
  compoundVariants: [
    { sizes: 'md', shapes: 'squared', class: 'rounded-[16px]' },
    { sizes: 'lg', shapes: 'squared', class: 'rounded-[28px]' },
    { sizes: 'xl', shapes: 'squared', class: 'rounded-[28px]' },
    { sizes: 'icon-md', shapes: 'squared', class: 'rounded-[16px]' },
    { sizes: 'icon-lg', shapes: 'squared', class: 'rounded-[28px]' },
    { sizes: 'icon-xl', shapes: 'squared', class: 'rounded-[28px]' },
    { variants: 'elevated', sizes: 'xs', class: 'shadow-elevation-light-lowest' },
    { variants: 'elevated', sizes: 'sm', class: 'shadow-elevation-light-lowest' },
    { variants: 'elevated', sizes: 'md', class: 'shadow-elevation-light-low' },
    { variants: 'elevated', sizes: 'lg', class: 'shadow-elevation-light-medium' },
    { variants: 'elevated', sizes: 'xl', class: 'shadow-elevation-light-medium' },
    { variants: 'outlined', sizes: 'lg', class: 'border-2' },
    { variants: 'outlined', sizes: 'xl', class: 'border-2' },
  ],
});