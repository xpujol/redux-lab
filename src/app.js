import React      from 'react';

class App extends React.Component
{
  render()
  {
    const {a,b} = this.props;
    return <div>{a + b}</div>;
  }
};

export default App;
