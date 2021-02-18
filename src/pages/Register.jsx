/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import RegisterForm from 'components/auth/RegisterForm';

function Register({ history }) {
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
            <RegisterForm />
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
