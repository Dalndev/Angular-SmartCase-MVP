import { ID } from "@smartcase/shared/dtypes";

export type Contact = {
  id: ID;
  firstName: string | undefined;
  lastName: string | undefined;
  middleName: string | undefined;
  mothersName: string | undefined;
  alias: string | undefined;
}