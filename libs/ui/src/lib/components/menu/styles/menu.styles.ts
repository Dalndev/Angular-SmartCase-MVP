import { tv } from "tailwind-variants";

const styles = tv({
  slots: {
    menu: 
      '',
    menuItem: 
      '',
    menuSeparator: 
      '',
    menuBadge: 
      ''
  }
});

export const { 
  base,
  menu,
  menuItem,
  menuSeparator,
  menuBadge
} = styles()