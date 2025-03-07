import { defineStore } from "pinia";
import { generateId } from "./utils";

//хоть убейте, но не знаю в чем проблема - этот файл никак не хочет экспортировать типы
export type RecorsTypes = "LDAP" | "Локальная";

export interface Account {
  id: string;
  label: { text: string }[];
  type: RecorsTypes;
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
        type: "Локальная",
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
