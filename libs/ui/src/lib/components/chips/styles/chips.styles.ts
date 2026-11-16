import { tv } from "tailwind-variants";

export const styles = tv({
  base: 'cursor-default overflow-hidden relative max-h-[32px] min-w-[59px] px-[16px] py-[6px] rounded-[8px] text-[14px] [--ng-icon__size:18px] has-[[slot="leading"]]:pl-[0px] [&>[slot="leading"]]:mx-[8px] has-[[slot="trailing"]]:pr-[0px] [&>[slot="trailing"]]:mx-[8px] font-medium inline-flex justify-center items-center whitespace-nowrap shrink-0 transition-all data-disabled:pointer-events-none data-disabled:opacity-50',
  variants: {
    variant: {
      outlined: 'border border-outline-variant bg-surface-container text-on-surface-variant [--ng-icon__color:var(--primary)] hover:[&>span]:bg-on-surface-variant-state-layer-light',
      elevated: 'border-none bg-surface-container-low text-on-surface shadow-elevation-light-lowest [--ng-icon__color:var(--primary)] hover:[&>span]:bg-on-surface-variant-state-layer-light',
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