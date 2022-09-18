import { useRouter } from 'next/router';
import { useState } from 'react';
import userApi from '../../apis/userApi';
import { validate } from '../../utilities/validateInput';
import { useRecoilState } from 'recoil';
import { loginState, userState } from '../../stores';
interface LoginData {
  id: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    id: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({ id: '', password: '' });
  const [visited, setVisited] = useState({ id: false, password: false });

  const [user, setUser] = useRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const isLoginButtonValid = ({ id, password }: LoginData) => {
    if (validate('id', id) && validate('password', password)) setDisabled(false);
    else setDisabled(true);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputType = e.target.id;
    const inputValue = e.target.value;

    setValues({ ...values, [inputType]: inputValue });
    isLoginButtonValid({ ...values, [inputType]: inputValue });
    if (validate(inputType, inputValue)) {
      setErrors({ ...errors, [inputType]: '' });
    } else
      inputType === 'id'
        ? setErrors({ ...errors, [inputType]: '올바른 아이디 형식으로 입력해주세요.' })
        : setErrors({ ...errors, [inputType]: '올바른 비밀번호 형식으로 입력해주세요.' });
  };

  const showErrors = (e: React.FocusEvent<HTMLInputElement>) => {
    setVisited({ ...visited, [e.target.id]: true });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await userApi.login(values);
      setUser(res.data.user.NAME);
      setIsLoggedIn(true);
      router.push('/');
    } catch (err) {
      // 에러 처리
      console.log(err);
    }
  };

  return {
    disabled,
    errors,
    visited,
    onSubmit,
    onChangeInput,
    showErrors,
  };
};

export default useLogin;
