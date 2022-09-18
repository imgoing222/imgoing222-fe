import Link from 'next/link';
import styled from 'styled-components';

import useNavigationBar from './useNavigationBar';

const NavigationBar = () => {
  const { user, domLoaded, isLoggedIn, onClickLogout } = useNavigationBar();

  return (
    <>
      {domLoaded && (
        <Header>
          <Link href='/'>
            <Title>HAUS</Title>
          </Link>
          {isLoggedIn ? (
            <div>
              <p>{user}</p>
              <button onClick={onClickLogout}>Logout</button>
            </div>
          ) : (
            <Link href='/login'>
              <p>login</p>
            </Link>
          )}
        </Header>
      )}
    </>
  );
};
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;
export default NavigationBar;
