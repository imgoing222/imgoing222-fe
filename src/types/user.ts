export interface UserInfo {
  user: {
    ID: string;
    NAME: string;
  };
}

export interface Login extends UserInfo {
  accessToken: string;
}
