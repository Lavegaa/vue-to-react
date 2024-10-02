import { create } from "zustand";
import { IAuthState, IAuthStore } from "./authStore.type";

const initialState: IAuthState = {
  authData: null,
};

export const authStore = create<IAuthStore>((set) => ({
  ...initialState,
  setAuth: (auth: LoginInfo) => set(() => ({ authData: auth })),
}));
