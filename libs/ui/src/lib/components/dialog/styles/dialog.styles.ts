import { tv } from "tailwind-variants";

const classes = tv({
  slots: {
    "dialogOverlay":
      "fixed bg-scrim-high backdrop-blur flex justify-center items-center inset-0 isolate z-50",
    "dialog":
      "h-max min-w-[280px] max-w-[560px] bg-surface-container-high rounded-[28px] shadow-elevation-light-medium",
    "dialogHeader":
      "flex flex-col justify-center items-center gap-[16px] px-[24px] pt-[24px]",
    "dialogTitle":
      "text-on-surface text-headline-small-emphasized leading-none",
    "dialogDescription":
      "text-on-surface-variant text-body-medium",
    "dialogFooter":
      "flex justify-end items-center px-[24px] py-[24px] gap-[8px]"
  }
});

export const {
  dialogOverlay,
  dialog,
  dialogHeader,
  dialogTitle,
  dialogDescription,
  dialogFooter
} = classes();

export default classes;