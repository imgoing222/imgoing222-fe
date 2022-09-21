import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useLogin from './useLogin';

const LoginPage: NextPage = () => {
  const { isLoggedIn, disabled, errors, visited, onSubmit, onChangeInput, showErrors } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push('/');
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>아이디</Label>
          <TextInput
            type='text'
            id='id'
            onChange={onChangeInput}
            onBlur={showErrors}
            isValid={!(visited.id && errors.id)}
          />
          {visited.id && <ErrorMessage>{errors.id}</ErrorMessage>}
        </div>
        <div>
          <Label>비밀번호</Label>
          <TextInput
            type='password'
            id='password'
            onChange={onChangeInput}
            onBlur={showErrors}
            isValid={!(visited.password && errors.password)}
          />
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

interface InputProps {
  isValid: boolean;
}

// 에러 시 background-color:
const TextInput = styled.input<InputProps>`
  margin-top: 8px;
  padding: 16px;
  background-color: ${({ isValid }) => (isValid ? '#f7f7fa' : '#fdedee')};
  border-radius: 12px;
`;

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
  cursor: pointer;
  &:disabled {
    background-color: #e2e2ea;
  }
`;
