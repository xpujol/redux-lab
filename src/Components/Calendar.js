import React from 'react';
import Day from './Day';

class Calendar extends React.Component
{
  renderFirstWeek()
  {
    return this.renderWeek([0,1,2,3,4]);
  }
  renderLastWeek()
  {
    return this.renderWeek([5,6,7,8,9]);

  }
  renderWeek(days_of_week)
  {
    const {participants, absents} = this.props;
    return this.props.days.map(function(day, i)
    {
      if (!days_of_week.includes(day))
      {
        return null;
      }
      const dayProps =
      {
        day,
        participants,
        absents
      };
      return <Day key={i} {...dayProps} />;
    });
  }
  render()
  {
    return <table>
      <tbody>
        <tr>{this.renderFirstWeek()}</tr>
        <tr>{this.renderLastWeek()}</tr>
      </tbody>
    </table>;
  }
};

export default Calendar;
