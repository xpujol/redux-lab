import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './app';

const initialData =
{
  participants : ['Xevi', 'Meri', 'Patxi', 'Carles'],
  days         : [false, false, true, true, true,
                  true, true, true, false],
  absent       : [{p : 3, d : 2}, {p : 0, d : 4}],   //El tercer dia falta el Carles, el cinquè dia falta el Xevi
  start_day    : '2016-04-13',
  percentage   : 80
};

ReactDOM.render(<App {...initialData} />, document.getElementById('root'));
