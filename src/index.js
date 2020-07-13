import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
// app.js에 있는 app 함수에서 만든 요소가 root 요소 안으로 들어감
// react Application은 한번에 한 Component만 랜더링할 수 있다.