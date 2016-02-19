import React      from 'react';

class Result extends React.Component
{
  render()
  {
    const {participants, absents, percentage, days} = this.props;

    const total = (percentage/100) * 2 * (((participants.length  * days.filter(d => d === true).length)) - absents.length);

    return <div>
      <p>
        Percentage : <input onChange={() => {}} type="text" value={this.props.percentage} />
      </p>
      <h1>{total} points</h1>
    </div>
  }
};

export default Result;
