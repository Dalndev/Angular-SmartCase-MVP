import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 
    'relative block min-w-[360px] max-w-[720px] max-h-[56px] h-full ps-[56px] pe-[56px] bg-surface-variant text-on-surface text-base rounded-[28px] align-baseline overflow-hidden'
    + ' [--ng-icon__size:24px] [--ng-icon__color:var(--on-surface-variant)]'
    + ' *:[[slot="trailing"]]:absolute *:[[slot="trailing"]]:top-1/2 *:[[slot="trailing"]]:left-[24px] *:[[slot="trailing"]]:-translate-y-1/2'
    + ' *:[[slot="leading"]]:absolute *:[[slot="leading"]]:top-1/2 *:[[slot="leading"]]:right-[24px] *:[[slot="leading"]]:-translate-y-1/2'
});
