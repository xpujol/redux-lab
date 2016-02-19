import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './app';
import store    from './State/';
import {Provider} from 'react-redux';

const initialData =
{
  participants : ['Xevi', 'Meri', 'Patxi', 'Carles'],
  days         : [false, false, true, true, true,
                  true, true, true, true, false],
  absents      : [{p : 3, d : 2}, {p : 1, d : 6}, {p : 1, d : 7}],   //El tercer dia falta el Carles,
  start_day    : '2016-04-13',
  percentage   : 75
};


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));
