import React from 'react';

function Hero() {
  return (
    <section className='hero is-default is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-5 is-offset-1 landing-caption'>
              <h1 className='title is-1 is-bold is-spaced'>함께 배우며 공유하세요.</h1>
              <h2 className='subtitle is-5 is-muted'>
                다양한 스터디에 참여하여 당신의 지식을 사람들에게 공유하세요
              </h2>
              <p>
                <button className='button cta rounded primary-btn raised'>시작하기</button>
              </p>
            </div>
            <div className='column is-5 is-offset-1'>
              <figure className='image is-4by3'>
                <img src={process.env.PUBLIC_URL + '/worker.svg'} alt='Description' />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
