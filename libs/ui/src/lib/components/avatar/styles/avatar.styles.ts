import { tv } from "tailwind-variants";

export const avatarStyles = tv({
  base: 'relative inline-flex justify-center items-center bg-secondary-container text-on-surface-variant font-medium align-middle overflow-hidden [&>img]:size-full after:absolute after:inset-0 after:border-2 after:border-white *:[[ngpavatarimage]]:object-cover',
  variants: {
    sizes: {
      sm: 'size-[24px] *:[[ngpavatarfallback]]:text-[12px]',
      md: 'size-[32px] *:[[ngpavatarfallback]]:text-[14px]',
      lg: 'size-[40px] *:[[ngpavatarfallback]]:text-[20px]'
    },
    shapes: {
      rounded: 'rounded-full *:[[ngpavatarimage]]:rounded-full after:rounded-full',
      squared: 'rounded-xs *:[[ngpavatarimage]]:rounded-xs after:rounded-xs'
    },
  },
  defaultVariants: {
    sizes: 'md',
    shapes: 'rounded'
  }
});

export const avatarGroupStyles = tv({
  base: 'flex -space-x-2'
})