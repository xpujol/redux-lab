import React from 'react';

class Result extends React.Component
{
  handleChange(e)
  {
    const val = e.target.value;
    (val >= 0) && (val <= 100) && this.props.change_percentage(val);
  }
  calculateResult()
  {
    const {participants, absents, percentage, days} = this.props;
    const total = (percentage/100) * 2 * (((participants.length  * days.filter(d => d).length)) - absents.length);
    return Math.round(total);
  }
  render()
  {
    return <div>
      <p>
        Percentage :
        <input onChange={this.handleChange.bind(this)} type="text" value={this.props.percentage} />
      </p>
      <h1>{this.calculateResult()} points</h1>
    </div>
  }
};

export default Result;
