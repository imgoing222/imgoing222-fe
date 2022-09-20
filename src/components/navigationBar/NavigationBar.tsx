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
              <Button onClick={onClickLogout}>Logout</Button>
            </div>
          ) : (
            <Link href='/login'>
              <Button>login</Button>
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
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
`;
export default NavigationBar;
