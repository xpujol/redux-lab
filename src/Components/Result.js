import React from 'react';

const sum = arr => arr.length ? arr.reduce((a, b) => a + b) : 0;

class Result extends React.Component
{
  handleChange(e)
  {
    const val = e.target.value;
    (val >= 0) && (val <= 100) && this.props.change_percentage(val);
  }
  calculateResultWithoutPercentage()
  {
    const {participants, percentage, days} = this.props;
    const total = days.map(function(isWorkingDay, dayIndex)
    {
      if ((!isWorkingDay) || (days.lastIndexOf(true) === dayIndex))
      {
        return 0;
      }
      return sum(participants.map(function(participant)
      {
        if (participant.absent.includes(dayIndex))
        {
          return 0;
        }
        return (days.indexOf(true) === dayIndex) ? 1 : 2;
      }));
    });

    return sum(total);
  }
  calculateResult(withoutPercentage)
  {
    return Math.round(10 * withoutPercentage * (this.props.percentage/100)) / 10;
  }
  render()
  {
    const withoutPercentage = this.calculateResultWithoutPercentage();
    return <div>
      <p>
        Percentage :
        <input onChange={this.handleChange.bind(this)} type="text" value={this.props.percentage} />
      </p>
      <p>
        {withoutPercentage} points - {100 - this.props.percentage}% =
      </p>
      <h1>{this.calculateResult(withoutPercentage)} points</h1>
    </div>
  }
};

export default Result;
