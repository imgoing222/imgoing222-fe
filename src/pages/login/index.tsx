import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import useLogin from './useLogin';

const LoginPage: NextPage = () => {
  const { disabled, errors, visited, onSubmit, onChangeInput, showErrors } = useLogin();

  return (
    <>
      <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        <Link href='/login'>
          <p>login</p>
        </Link>
      </Header>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>아이디</Label>
          <TextInput type='text' id='id' onChange={onChangeInput} onBlur={showErrors} />
          {visited.id && <ErrorMessage>{errors.id}</ErrorMessage>}
        </div>
        <div>
          <Label>비밀번호</Label>
          <TextInput type='password' id='password' onChange={onChangeInput} onBlur={showErrors} />
          {visited.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>
        <LoginButton disabled={disabled} type='submit'>
          로그인
        </LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
  div {
    display: flex;
    flex-direction: column;
    &:first-child {
      margin-bottom: 16px;
    }
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
`;

// 에러 시 background-color: #FDEDEE
const TextInput = styled.input`
  margin-top: 8px;
  padding: 16px;
  background-color: #f7f7fa;
  border-radius: 12px;
`;

// 에러 발생 시 display: block; 평소에는 none
const ErrorMessage = styled.div`
  margin-top: 8px;
  font-weight: 400;
  font-size: 13px;
  color: #ed4e5c;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
