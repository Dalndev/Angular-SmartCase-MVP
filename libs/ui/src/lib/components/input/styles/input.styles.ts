import { tv } from "tailwind-variants";

export const styles = tv({
  base:       
    "text-on-surface-variant caret-primary outline-none border-none rounded-none bg-none h-auto w-full min-w-0 p-0 peer",
  variants: {
    variant: {
      filled: 
        "",
      outlined: 
        ""
    },
    input: {
      email: 
        "",
      tel: 
        "",
      input: 
        ""
    }
  }
});