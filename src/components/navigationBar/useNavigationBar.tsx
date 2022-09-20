import { useState, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { loginState, userState } from '../../stores';

const useNavigationBar = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const onClickLogout = () => {
    setUser('');
    setIsLoggedIn(false);
  };

  return { user, domLoaded, isLoggedIn, onClickLogout };
};

export default useNavigationBar;
