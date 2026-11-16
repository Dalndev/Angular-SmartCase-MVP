import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    select: "outline-none border-none rounded-none bg-none inline-block p-0 h-auto w-full min-w-0 peer",
    selectValue: "w-full overflow-hidden whitespace-nowrap text-ellipsis",
    selectContent: "absolute min-w-[112px] max-w-[280px] max-h-[275px] z-[1000] rounded-b-[4px] rounded-t-none py-[8px] bg-surface-container shadow-elevation-light-low flex flex-col items-start justify-center w-(--ngp-select-width) origin-(--ngp-select-transform-origin)",
    selectItem: "relative min-h-[48px] px-[16px] py-0 w-full border-none overflow-hidden cursor-pointer text-on-surface text-label-large flex justify-start items-center",
  }
});

export const {
  select,
  selectContent,
  selectItem,
  selectValue
} = styles()