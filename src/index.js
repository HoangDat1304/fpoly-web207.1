import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const person = {
  name: 'Hoàng Văn Đạt',
  age: 20,
  status: false
}
function total(giatriA, giatriB) {
  return giatriA + giatriB;
}
const a = 5;
const b = 5;

const element = <h1>Tổng là :{total(a, b)}</h1>

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);



