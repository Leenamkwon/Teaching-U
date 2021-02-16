import { getServices } from 'assets/sampleData';
import Hero from 'components/Hero';
import ServiceItem from 'components/service/ServiceItem';
import React, { useEffect, useState } from 'react';

function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(getServices());
  }, []);

  function renderService() {
    return services.map((service) => <ServiceItem service={service} />);
  }

  return (
    <>
      <Hero />
      <section className='section section-feature-grey is-medium'>
        <div className='container'>
          <div className='title-wrapper has-text-centered'>
            <h2 className='title is-2'>같이 공부해요.</h2>
            <h3 className='subtitle is-5 is-muted'>배우고 싶은 분야의 스터디를 찾아보세요.</h3>
            <div className='divider is-centered'></div>
          </div>

          <div className='content-wrapper'>
            <div className='columns'>{renderService()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

// 멀티 = true, false 조건 하나만, 한개만 인덱스랑 선택인덱스랑 비교
