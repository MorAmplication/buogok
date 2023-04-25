import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mor_test: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
