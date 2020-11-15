import React from 'react';

function RegisterForm() {
  return (
    <form>
      <div className='field'>
        <div className='control'>
          <input
            name='email'
            className='input is-large'
            type='email'
            placeholder='Your Email'
            autofocus=''
            autocomplete='email'
          />
          <div className='form-error'>
            <span className='help is-danger'>Email is required</span>
            <span className='help is-danger'>Email address is not valid</span>
          </div>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            name='fullName'
            className='input is-large'
            type='text'
            placeholder='Full Name'
            autofocus=''
          />
          <div className='form-error'>
            <span className='help is-danger'>Name is required</span>
            <span className='help is-danger'>Name is not valid</span>
          </div>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            name='avatar'
            className='input is-large'
            type='text'
            placeholder='Avatar'
            autofocus=''
          />
          <div className='form-error'>
            <span className='help is-danger'>Avatar is required</span>
            <span className='help is-danger'>Avatart is not valid</span>
          </div>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            name='password'
            className='input is-large'
            type='password'
            placeholder='Your Password'
            autocomplete='current-password'
          />
          <div className='form-error'>
            <span className='help is-danger'>Password is required</span>
          </div>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            name='passwordConfirmation'
            className='input is-large'
            type='password'
            placeholder='Repeat Password'
            autocomplete='current-password'
          />
          <div className='form-error'>
            <span className='help is-danger'>
              Password Confirmation is required
            </span>
          </div>
        </div>
      </div>
      <button
        type='submit'
        className='button is-block is-info is-large is-fullwidth'
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
