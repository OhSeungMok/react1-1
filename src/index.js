import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'
import Library from './chapter_03/Library'
import Clock from './chapter_04/Clock'
import Welcome from './chapter_05/Welcome';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
    )

/* Commnet.jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <CommentList/>
    </React.StrictMode>
    ) */

/* Welcome.jsx
const element = <Welcome name="승목" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
const root = ReactDOM.createRoot(document.getElementById('root'));
    <React.StrictMode>
      <Welcome/>
    </React.StrictMode> */


/* index-Clock.js
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>
  );
}, 1000) */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
