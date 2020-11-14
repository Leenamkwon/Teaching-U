import React from 'react';

function Hero() {
  return (
    <section className='hero is-default is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-5 is-offset-1 landing-caption'>
              <h1 className='title is-1 is-bold is-spaced'>
                함께 배우며 공유하세요.
              </h1>
              <h2 className='subtitle is-5 is-muted'>
                'Teaching U'는 다양한 스터디가 있으며 스터디장에게 궁금한 점을
                실시간 채팅으로 물어볼 수 있습니다.{' '}
              </h2>
              <p>
                <button className='button cta rounded primary-btn raised'>
                  시작하기
                </button>
              </p>
            </div>
            <div className='column is-5 is-offset-1'>
              <figure className='image is-4by3'>
                <img
                  src={process.env.PUBLIC_URL + '/worker.svg'}
                  alt='Description'
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
