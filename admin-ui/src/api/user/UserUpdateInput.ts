import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  mor_test?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
