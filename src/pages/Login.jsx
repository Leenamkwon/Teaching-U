/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const { addToast } = useToasts();
  const [redirect, setRedirect] = useState(false);

  const onLogin = (loginData) => {
    console.log(loginData);
  };

  return (
    <div className='auth-page'>
      <div className='container has-text-centered'>
        <div className='column is-4 is-offset-4'>
          <h3 className='title has-text-grey'>Login</h3>
          <p className='subtitle has-text-grey'>Please login to proceed.</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' alt='Company logo' />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register}
                    name='email'
                    className='input is-large'
                    type='email'
                    placeholder='Your Email'
                  />
                  <div className='form-error'>
                    <span className='help is-danger'>Email is required</span>
                    <span className='help is-danger'>
                      Email address is not valid
                    </span>
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register}
                    name='password'
                    className='input is-large'
                    type='password'
                    placeholder='Your Password'
                  />
                  <div className='form-error'>
                    <span className='help is-danger'>Password is required</span>
                  </div>
                </div>
              </div>
              <button
                type='button'
                className='button is-block is-info is-large is-fullwidth'
              >
                Sign In
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
