import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@renderer/window/window-frame';
import Application from '@renderer/core/application';
import { store } from './store';

// Say something
console.log('[AMP] : Renderer execution started');

// Application to Render
const app = (
  <Provider store={store}>
    <WindowFrame title='Awesome Music Player' platform='windows'>
      <Application />
    </WindowFrame>
  </Provider>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
