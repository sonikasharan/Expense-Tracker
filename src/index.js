import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import { Provider } from './context/Context';
import './index.css';
import {SpeechProvider } from '@speechly/react-client';
ReactDOM.render(
<SpeechProvider appId="18cc0b48-712d-4dd2-9e5e-225630e451" language="en-US">
<Provider>

<App/>
</Provider>
</SpeechProvider>
,document.getElementById('root'));