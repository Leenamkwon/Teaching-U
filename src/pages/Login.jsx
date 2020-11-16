/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';
import { login } from 'actions';

function Login() {
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit } = useForm();
  const { addToast } = useToasts();

  const onLogin = (loginData) => {
    login(loginData)
      .then((_) => {
        console.log('hi');
        setRedirect(true);
      })
      .catch((err) => {
        addToast(err, {
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      });
  };

  if (redirect) return <Redirect to='/' />;

  return (
    <div className='auth-page'>
      <div className='container has-text-centered'>
        <div className='column is-4 is-offset-4'>
          <h3 className='title has-text-grey'>로그인</h3>
          <p className='subtitle has-text-grey'>로그인을 진행 해주세요</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' alt='Company logo' />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register({
                      required: true,
                      // eslint-disable-next-line no-useless-escape
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    })}
                    name='email'
                    className='input is-large'
                    type='email'
                    placeholder='이메일'
                  />
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register({ required: true })}
                    name='password'
                    className='input is-large'
                    type='password'
                    placeholder='비밀번호'
                  />
                </div>
              </div>
              <button
                type='submit'
                className='button is-block is-info is-large is-fullwidth'
              >
                로그인
              </button>
            </form>
          </div>
          <p className='has-text-grey'>
            <a>Sign In With Google</a>&nbsp;
            <a href='/'>Sign Up</a> &nbsp;·&nbsp;
            <a href='../'>Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
