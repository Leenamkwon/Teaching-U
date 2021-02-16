import React from 'react';
import { useForm } from 'react-hook-form';
import { isValidImage, isValidUrl, sameAs } from 'utils/validators';

function RegisterForm({ registerUser }) {
  const { register, handleSubmit, errors, getValues } = useForm();

  const getFormData = (data) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(getFormData)}>
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
          {errors.email && (
            <div className='form-error'>
              {errors.email.type === 'required' && (
                <span className='help is-danger'>이메일은 필수입니다.</span>
              )}
              {errors.email.type === 'pattern' && (
                <span className='help is-danger'>유효하지 않은 이메일 입니다.</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({ required: true, minLength: 2 })}
            name='fullName'
            className='input is-large'
            type='text'
            placeholder='이름'
          />
          {errors.fullName && (
            <div className='form-error'>
              {errors.fullName.type === 'required' && (
                <span className='help is-danger'>이름은 필수입니다.</span>
              )}
              {errors.fullName.type === 'minLength' && (
                <span className='help is-danger'>이름은 최소 2자리 이상이여야 합니다.</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({
              required: true,
              // eslint-disable-next-line no-useless-escape
              validate: { isValidImage, isValidUrl },
            })}
            name='avatar'
            className='input is-large'
            type='text'
            placeholder='아바타'
          />
          {errors.avatar && (
            <div className='form-error'>
              {errors.avatar.type === 'required' && (
                <span className='help is-danger'>아바타는 필수입니다.</span>
              )}
              {errors.avatar.type === 'isValidImage' && (
                <span className='help is-danger'>
                  확장자가 유효하지 않습니다. jpg, jpeg, svg, png파일을 올려주세요.
                </span>
              )}
              {errors.avatar.type === 'isValidUrl' && (
                <span className='help is-danger'>url주소가 유효하지 않습니다.</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({ required: true, minLength: 6 })}
            name='password'
            className='input is-large'
            type='password'
            placeholder='비밀번호'
          />
          {errors.password && (
            <div className='form-error'>
              {errors.password.type === 'required' && (
                <span className='help is-danger'>비밀번호는 필수입니다.</span>
              )}
              {errors.password.type === 'minLength' && (
                <span className='help is-danger'>비밀번호는 최소 6자리 이상이여야 합니다.</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({
              required: true,
              minLength: 6,
              validate: { sameAs: sameAs(getValues, 'password') },
            })}
            name='passwordConfirmation'
            className='input is-large'
            type='password'
            placeholder='비밀번호 확인'
          />
          {errors.passwordConfirmation && (
            <div className='form-error'>
              {errors.passwordConfirmation.type === 'required' && (
                <span className='help is-danger'>비밀번호와 맞지 않습니다.</span>
              )}
              {errors.passwordConfirmation.type === 'sameAs' && (
                <span className='help is-danger'>비밀번호는 최소 6자리 이상이여야 합니다.</span>
              )}
            </div>
          )}
        </div>
      </div>
      <button type='submit' className='button is-block is-info is-large is-fullwidth'>
        가입하기
      </button>
    </form>
  );
}

export default RegisterForm;
