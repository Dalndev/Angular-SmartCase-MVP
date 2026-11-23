import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    field: 
      "relative flex flex-col group/field *:w-full text-body-large",
    fieldLabel: 
      "absolute top-1/2 left-0 origin-top-left -translate-y-1/2 pointer-events-auto transition-all text-start font-medium text-on-surface-variant text-ellipsis whitespace-nowrap overflow-hidden peer-data-focus:-translate-y-full peer-data-focus:scale-75 peer-data-focus:text-primary peer-data-[filled=true]:-translate-y-full peer-data-[filled=true]:scale-75 peer-data-[filled=true]:text-primary",
    fieldDescription: 
      "border-none bg-none p-0",
    fieldError: 
      "before:inline-block",
    fieldWrapper:
      "box-border relative bg-surface-variant h-auto w-full px-[16px] flex-auto rounded-t-[4px] rounded-b-none",
    fieldFlex:
      "box-border inline-flex align-baseline w-full",
    fieldInfix: 
      "box-border relative pb-[8px] pt-[24px] flex-auto min-w-0 w-[180px] min-h-[56px]",
    fieldOverlay:
      "before:absolute before:left-0 before:bottom-0 before:w-full before:border-b before:border-on-surface-variant before:z-1 after:absolute after:left-0 after:bottom-0 after:w-full after:border-b-2 after:border-primary after:z-2 after:opacity-0 after:scale-x-0  [ui-field:has(input[data-filled='true'])_&]:after:opacity-100 [ui-field:has(input[data-filled='true'])_&]:after:scale-x-100 [ui-field:has(input:focus)_&]:after:opacity-100 [ui-field:has(input:focus)_&]:after:scale-x-100 [ui-field[aria-expanded='true']_&]:after:opacity-100 [ui-field[aria-expanded='true']_&]:after:scale-x-100 [ui-field:has(ui-select[data-filled='true'])_&]:after:opacity-100 [ui-field:has(ui-select[data-filled='true'])_&]:after:scale-x-100 transition-all",
    fieldSubsWrapper:
      "hidden box-border relative w-full text-body-small before:inline-block before:h-[16px]",
    fieldHintWrapper:
      "absolute top-0 left-0 right-0 px-[16px] flex opacity-[1] translate-y-0 *:before:inline-block *:before:h-[16px]"
  }
});

export const {
  field,
  fieldLabel,
  fieldDescription,
  fieldError,
  fieldWrapper,
  fieldFlex,
  fieldInfix,
  fieldOverlay,
  fieldSubsWrapper,
  fieldHintWrapper
} = styles();