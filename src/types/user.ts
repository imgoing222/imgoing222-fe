export interface UserInfo {
  user: {
    id: string;
    name: string;
  };
}

export interface Login extends UserInfo {
  accessToken: string;
}
