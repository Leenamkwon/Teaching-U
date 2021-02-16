import React from 'react';

function ServiceDetails() {
  return (
    <>
      <section className='hero is-fullheight is-default is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='columns is-vcentered'>
              <div className='column is-5'>
                <figure className='image is-4by3'>
                  <img src='' alt='Description' />
                </figure>
              </div>
              <div className='column is-6 is-offset-1'>
                <h1 className='title is-2'></h1>
                <h2 className='subtitle is-4'></h2>
                <br />
                <p className='has-text-centered'>
                  <button className='button is-medium is-info is-outlined'>Learn more</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetails;
