import { tv } from "tailwind-variants";

export const avatarStyles = tv({
  base: 'relative inline-flex rounded-full justify-center items-center bg-secondary-container text-on-surface-variant font-medium align-middle overflow-hidden [&>img]:size-full after:absolute after:inset-0 after:border-2 after:border-white after:rounded-full *:[[ngpavatarimage]]:rounded-full *:[[ngpavatarimage]]:object-cover',
  variants: {
    sizes: {
      sm: 'size-[32px] *:[[ngpavatarfallback]]:text-[12px]',
      md: 'size-[40px] *:[[ngpavatarfallback]]:text-[16px]',
      lg: 'size-[48px] *:[[ngpavatarfallback]]:text-[20px]'
    },
  },
  defaultVariants: {
    sizes: 'md',
  }
});

export const avatarGroupStyles = tv({
  base: 'group/avatar-group flex -space-x-2'
})