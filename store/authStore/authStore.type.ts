export interface IAuthState {
  authData: LoginInfo | null;
}

export interface IAuthStore extends IAuthState {
  setAuth: (auth: LoginInfo) => void;
}
