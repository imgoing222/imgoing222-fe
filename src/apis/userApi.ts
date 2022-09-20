import { request } from './index';
import { AxiosResponse } from 'axios';
import { Login, UserInfo, UserLogin } from '../types/user';

interface UserApiType {
  login: (userInfo: UserLogin) => Promise<AxiosResponse<Login>>;
  getUserInfo: (userId: string) => Promise<AxiosResponse<UserInfo>>;
}

const userApi: UserApiType = {
  login: (userInfo) => request.post('login', userInfo),
  getUserInfo: (userId) => request.get(`users/${userId}`),
};

export default userApi;
