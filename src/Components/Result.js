import React      from 'react';

class Result extends React.Component
{
  render()
  {
    const total = 69;

    return <div>
      <p>
        Percentage : <input onChange={() => {}} type="text" value={this.props.percentage} />
      </p>
      <h1>{total} points</h1>
    </div>
  }
};

export default Result;
