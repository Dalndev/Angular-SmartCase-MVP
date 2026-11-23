import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    navigation: 
      'w-full h-full flex justify-start',
    navigationRail: 
      'min-w-[96px] h-full flex flex-col gap-y-[40px] bg-surface-container',
    navigationHeader: 
      'pt-[44px] flex flex-col justify-start items-center gap-[4px]',
    navigationContent: 
      'flex-initial h-full',
    navigationFooter: 
      'pb-[44px] flex flex-col items-center',
    navigationList: 
      'flex flex-col items-center gap-[4px]',
    navigationItem: 
      'min-h-[56px] max-h-[64px] my-[6px] [&_[data-slot="item-label"]]:text-label-medium-emphasized [&_[ngpbutton]]:w-[56px] [&_[ngpbutton]]:h-[32px] [&_ui-button]:mb-[8px] [&_[ngpbutton]]:px-[16px] [--ng-icon__size:24px] [--ng-icon__color:var(--on-surface-variant)]',
    navigationItemLabel: 
      'block text-center',
    navigationPortal: 
      'flex-1'
  }
})

export const { 
  navigation,
  navigationPortal,
  navigationRail,
  navigationHeader,
  navigationContent,
  navigationFooter,
  navigationList,
  navigationItem,
  navigationItemLabel
} = styles()