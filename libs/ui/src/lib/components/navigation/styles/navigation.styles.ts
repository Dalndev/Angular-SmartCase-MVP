import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    navigation: 'min-w-[96px] h-full flex flex-col pt-[44px] bg-surface-container space-y-[40px]',
    navigationHeader: 'flex flex-col justify-start items-center gap-[4px]',
    navigationContent: 'flex-initial h-full',
    navigationFooter: 'flex flex-col items-center pb-[44px]',
    navigationList: 'flex flex-col items-center gap-[4px]',
    navigationItem: 'min-h-[56px] max-h-[64px] mb-[6px] [&_[data-slot="item-label"]]:text-label-medium-emphasized [&_[ngpbutton]]:w-[56px] [&_[ngpbutton]]:h-[32px] [&_ui-button]:mb-[8px] [&_[ngpbutton]]:px-[16px] [--ng-icon__size:24px]',
    navigationItemLabel: 'block text-center'
  }
})

export const { 
  navigation,
  navigationHeader,
  navigationContent,
  navigationFooter,
  navigationList,
  navigationItem,
  navigationItemLabel
} = styles()