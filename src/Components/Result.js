import React from 'react';

const sum = arr => arr.length ? arr.reduce((a, b) => a + b) : 0;

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
    const total = days.map(function(isWorkingDay, dayIndex)
    {
      if ((!isWorkingDay) || (days.lastIndexOf(true) === dayIndex))
      {
        return 0;
      }
      return sum(participants.map(function(p, pIndex)
      {
        if (!!absents.find(a => pIndex === a.p && dayIndex === a.d))
        {
          return 0;
        }
        return (days.indexOf(true) === dayIndex) ? 1 : 2;
      }));
    });
    return Math.round(10 * sum(total) * (percentage/100)) / 10;
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
