import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('render-target')
  );
});
