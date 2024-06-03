import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyle from './styles/GlobalStyles';
import { MyPage } from './MyPage.jsx';
import ListCard from './styles/ListCard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <MyPage />
    <ListCard />
  </React.StrictMode>
);
