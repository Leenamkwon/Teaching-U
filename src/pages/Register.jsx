/* eslint-disable jsx-a11y/anchor-is-valid */
import RegisterForm from 'components/auth/RegisterForm';
import React, { useState } from 'react';
import { register } from '../actions';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';

function Register({ history }) {
  const { addToast } = useToasts();
  const [redirect, setRedirect] = useState(false);

  const registerUser = async (userData) => {
    try {
      await register(userData);
      setRedirect(true);
    } catch (error) {
      addToast(error, {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
    }
  };

  if (redirect) return <Redirect to='/' />;

  return (
    <div className='auth-page'>
      <div className='container has-text-centered'>
        <div className='column is-4 is-offset-4'>
          <h3 className='title has-text-grey'>회원가입</h3>
          <p className='subtitle has-text-grey'>회원 가입을 진행해주세요.</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' alt='company logo' />
            </figure>
            <RegisterForm registerUser={registerUser} />
          </div>
          <p className='has-text-grey'>
            <a>구글로 로그인하기</a>&nbsp;
            <a href='/'>로그인 하기</a> &nbsp;·&nbsp;
            <a href='../'>도움이 필요하세요?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
