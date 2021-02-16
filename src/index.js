import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render() {
  return ReactDOM.render(<App />, document.getElementById('root'));
}

if (module.hot) {
  module.hot.accept('./App', function () {
    setTimeout(render, 0);
  });
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
