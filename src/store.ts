import { defineStore } from "pinia";
import { generateId } from "./utils";

//хоть убейте, но не знаю в чем проблема - этот файл никак не хочет экспортировать типы
export enum RecordType {
  local = "Локальная",
  ldap = "LDAP",
}

export type Label = { text: string };

export interface Account {
  id: string;
  label: Label[];
  type: RecordType;
  login: string;
  password: string | null;
}

export const useStore = defineStore("account", {
  state: () => ({ accounts: [] as Account[] }),
  actions: {
    addAccount() {
      this.accounts.push({
        id: generateId(),
        label: [],
        type: RecordType.local,
        login: "",
        password: "",
      } as Account);
    },
    removeAccount(id: string) {
      this.accounts = this.accounts.filter(
        (account: Account) => account.id !== id
      );
    },
    updateAccount(updatedAccount: Account) {
      this.accounts = this.accounts.map((account: Account) =>
        account.id === updatedAccount.id ? updatedAccount : account
      );
    },
  },
});
