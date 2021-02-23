/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import RegisterForm from 'components/auth/RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'actions/authAction';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [error, setErrors] = useState('');

  const registerUser = (userData) => {
    dispatch(register(userData))
      .then((_) => {
        history.push('/');
      })
      .catch((error) => {
        setErrors(error.message);
        addToast(error.message, { appearance: 'error', autoDismiss: true });
      });
  };

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
            <RegisterForm registerUser={registerUser} error={error} />
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
