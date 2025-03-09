import type { Label } from "./Label";
import { RecordType } from "./RecordType";

export interface Account {
  id: string;
  label: Label[];
  type: RecordType;
  login: string;
  password: string | null;
}
