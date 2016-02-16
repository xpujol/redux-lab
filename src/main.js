import React      from 'react';
import ReactDOM   from 'react-dom';
import App        from './app';

const data = {
  a : 1,
  b : 2
};

ReactDOM.render(<App {...data} />, document.getElementById('root'));
