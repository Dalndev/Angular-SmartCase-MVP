import { tv } from 'tailwind-variants';

const styles = tv({
  base: 'relative text-start w-full mx-auto h-max py-[16px] flex flex-col rounded-[12px] border border-outline-variant has-[ui-card-footer]:pb-0 has-[ui-card-header]:pt-0 [&>img+ui-card-content]:py-[16px] [&>img~ui-card-footer]:pt-[0px] has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-[12px] *:[img:first-child]:rounded-t-[12px]',
  slots: {
    cardAction:
      'relative self-end rounded-full inline-flex items-center justify-center whitespace-nowrap size-[40px] [--ng-icon__size:24px] text-on-surface-variant outline-0 outline-transparent data-hover:[&>span]:bg-primary-state-layer-light-low data-press:[&>span]:bg-primary-state-layer-light data-focus-visible:outline-3 data-focus-visible:outline-offset-2 data-focus-visible:outline-outline overflow-hidden',
    cardHeader:
      'relative pl-[16px] py-[12px] pr-[4px] rounded-t-[12px] inline-flex flex-row justify-between items-center',
    cardHeadline: 
      'inline-flex flex-col',
    cardTitle: 
      'text-[16px] font-medium text-on-surface',
    cardDescription: 
      'text-[14px] font-normal text-on-surface-variant',
    cardContent:
      'text-[14px] px-[16px] font-normal inline-flex flex-col gap-[32px] text-on-surface-variant whitespace-normal',
    cardFooter: 
      'p-[16px] flex items-center rounded-b-[12px] gap-[8px]',
  },
  variants: {
    variant: {
      elevated:
        'bg-surface-container-low shadow-elevation-light-lowest text-on-surface',
      filled: 
        'bg-surface-container-highest text-on-surface-variant',
      outlined:
        'bg-surface border border-outline-variant text-on-surface-variant',
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
});

export const {
  base,
  cardHeader,
  cardHeadline,
  cardTitle,
  cardDescription,
  cardAction,
  cardContent,
  cardFooter,
} = styles();
