// - 아이디 형식
//     - 영문 대문자와 영문 소문자, 숫자가 포함될 수 있습니다. (세 가지 중 일부만 포함되어도 됩니다.)
//     - 5자 이상 30자 이하로 작성해야 합니다.
import { UserInfo } from '../types/user';

export const validateId = (id: UserInfo['user']['id']) => {
  const regExp = /^[A-Za-Z0-9]{5, 30}$/;
  return regExp.test(id);
};

// - 비밀번호 형식
//     - 영문 대문자, 영문 소문자와 숫자가 모두 포함되어야 합니다.
//     - 8자 이상 30자 이하로 작성해야 합니다.
export const validatePassword = (password: string) => {
  const regExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d){8, 30}$/;
  return regExp.test(password);
};
