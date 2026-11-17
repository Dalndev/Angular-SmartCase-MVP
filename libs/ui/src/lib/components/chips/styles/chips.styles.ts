import { tv } from "tailwind-variants";

export const styles = tv({
  base: 'cursor-default relative font-medium inline-flex justify-center items-center shrink-0 whitespace-nowrap overflow-hidden max-h-[32px] min-w-[59px] px-[16px] py-[6px] rounded-[8px] text-[14px] [--ng-icon__size:18px] has-[[slot="leading"]]:pl-[0px] [&>[slot="leading"]]:mx-[8px] has-[[slot="trailing"]]:pr-[0px] [&>[slot="trailing"]]:mx-[8px] transition-all data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50 data-[disabled="true"]:bg-surface-container-high',
  variants: {
    variant: {
      outlined: 'border border-outline-variant text-on-surface-variant [--ng-icon__color:var(--primary)] outline-0 outline-transparent data-hover:[&>span]:bg-primary-state-layer-light-low data-press:[&>span]:bg-primary-state-layer-light disabled:shadow-none focus:outline-3 focus:outline-offset-2 focus:outline-outline',
      elevated: 'bg-surface-container-low text-on-surface shadow-elevation-light-lowest [--ng-icon__color:var(--primary)] hover:[&>span]:bg-on-surface-variant-state-layer-light border-none outline-0 outline-transparent data-hover:[&>span]:bg-primary-state-layer-light-low data-press:[&>span]:bg-primary-state-layer-light disabled:shadow-none focus:outline-3 focus:outline-offset-[3px] focus:outline-outline',
    },
    selected: {
      true: 'bg-secondary-container text-on-secondary-container hover:[&>span]:bg-on-secondary-container-state-layer-light-low',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'outlined',
    selected: false
  },
  compoundVariants: [
    { variant: 'elevated', selected: true, class: 'hover:shadow-elevation-light-medium' },
    { variant: 'outlined', selected: true, class: 'hover:shadow-elevation-light-lowest' }
  ]
})