/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutFirebase } from 'firestore/firestoreService';

const Navbar = ({ id }) => {
  const { currentUser, authenticated } = useSelector((state) => state.auth);

  return (
    <nav
      className='navbar is-fresh is-transparent no-shadow'
      role='navigation'
      aria-label='main navigation'
      id={id}
    >
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <div className='title'>Teaching U</div>
          </Link>

          <a className='navbar-item is-hidden-desktop is-hidden-tablet'>
            <div id='menu-icon-wrapper' className='menu-icon-wrapper' style={{ visibility: 'visible' }}>
              <svg width='1000px' height='1000px'>
                <path
                  className='path1'
                  d='M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800'
                ></path>
                <path className='path2' d='M 300 500 L 700 500'></path>
                <path
                  className='path3'
                  d='M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200'
                ></path>
              </svg>
              <button id='menu-icon-trigger' className='menu-icon-trigger'></button>
            </div>
          </a>

          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbar-menu'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbar-menu' className='navbar-menu is-static'>
          <div className='navbar-start'>
            <a className='navbar-item is-hidden-mobile'>
              <div id='menu-icon-wrapper' className='menu-icon-wrapper' style={{ visibility: 'visible' }}>
                <svg width='1000px' height='1000px'>
                  <path
                    className='path1'
                    d='M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800'
                  ></path>
                  <path className='path2' d='M 300 500 L 700 500'></path>
                  <path
                    className='path3'
                    d='M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200'
                  ></path>
                </svg>
                <button id='menu-icon-trigger' className='menu-icon-trigger'></button>
              </div>
            </a>
          </div>

          <div className='navbar-end'>
            {authenticated && (
              <div className='navbar-item is-secondary user-welcome'>{`Hi ${currentUser.fullName}`}</div>
            )}
            <Link to='/' className='navbar-item is-secondary'>
              홈
            </Link>
            <Link to='/services' className='navbar-item is-secondary'>
              서비스
            </Link>
            <Link to='/faq' className='navbar-item is-secondary'>
              FaQ
            </Link>
            {authenticated && (
              <div className='navbar-item has-dropdown is-hoverable'>
                <a className='navbar-link'>관리</a>

                <div className='navbar-dropdown'>
                  <Link className='navbar-item' to='/services/new'>
                    Create Service
                  </Link>
                  <Link className='navbar-item' to='/services/me'>
                    Your Services
                  </Link>
                </div>
              </div>
            )}
            {!authenticated && (
              <>
                <Link to='/login' className='navbar-item is-secondary modal-trigger' data-modal='auth-modal'>
                  로그인
                </Link>
                <Link to='/register' className='navbar-item'>
                  <span className='button signup-button rounded secondary-btn raised'>회원 가입</span>
                </Link>
              </>
            )}
            {authenticated && (
              <div onClick={signoutFirebase}>
                <span className='button signup-button is-danger rounded raised'>Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
