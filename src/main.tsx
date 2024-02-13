import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// 1. Сделать валидации для каждого типа характеристики

// 2. Сделать изменение характеристики после успешной валидаци

// 3. Сделать в состоянии массив для ошибок валидации. Подумать, какие поля в объекте ошибки нужно хранить

// 4. При неудачной валидации, добавить в массив ошибок новую ошибку

// 5. Компонент ячейки перед рендером должен проверить нет ли ошибок, связанных с его данными

// 6. Компонент кнопки завязан на длину массива ошибок
