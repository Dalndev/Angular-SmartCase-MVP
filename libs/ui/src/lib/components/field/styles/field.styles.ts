import { tv } from "tailwind-variants";

/**
 * TODO.
 * 
 * - [] Implementación de variación de estilos filled & outlined.
 */
export const styles = tv({
  variants: {
    variant: {
      filled:
        "",
      outlined:
        ""
    }
  },
  slots: {
    field: 
      "relative flex flex-col group/field *:w-full text-body-large",
    fieldLabel: 
      "absolute top-1/2 left-0 origin-top-left -translate-y-1/2 pointer-events-auto transition-all text-start font-medium text-on-surface-variant text-ellipsis whitespace-nowrap overflow-hidden peer-data-focus:-translate-y-full peer-data-focus:scale-75 peer-data-focus:text-primary peer-data-[filled=true]:-translate-y-full peer-data-[filled=true]:scale-75 peer-data-[filled=true]:text-primary",
    fieldDescription: 
      "border-none bg-none p-0",
    fieldError: 
      "before:inline-block"
  }
});

export const {
  field,
  fieldLabel,
  fieldDescription,
  fieldError
} = styles();