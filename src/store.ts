import { defineStore } from "pinia";
import { generateId } from "./utils";
import type { Account } from "./Types";
import { RecordType } from "./Types";

const STORAGE_KEY = "accounts";

export const useStore = defineStore("account", {
  state: () => ({ accounts: [] as Account[] }),
  actions: {
    initialize() {
      const savedAccounts = localStorage.getItem(STORAGE_KEY);
      if (savedAccounts) {
        this.accounts = JSON.parse(savedAccounts);
      }
    },

    addAccount() {
      this.accounts.push({
        id: generateId(),
        label: [],
        type: RecordType.local,
        login: "",
        password: "",
      } as Account);
      this.saveToLocalStorage();
    },
    removeAccount(id: string) {
      this.accounts = this.accounts.filter(
        (account: Account) => account.id !== id
      );
      this.saveToLocalStorage();
    },
    updateAccount(updatedAccount: Account) {
      this.accounts = this.accounts.map((account: Account) =>
        account.id === updatedAccount.id ? updatedAccount : account
      );
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.accounts));
    },
  },
});
