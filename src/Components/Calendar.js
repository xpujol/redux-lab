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
    const {startDay, participants, absents, toggle_day, set_absent, unset_absent} = this.props;
    return this.props.days.map(function(isNotHoliday, dayIndex)
    {
      if (!days_of_week.includes(dayIndex))
      {
        return null;
      }
      const dayProps =
      {
        toggle       : () => toggle_day(dayIndex),
        set_absent   : p => set_absent(p, dayIndex),
        unset_absent : p => unset_absent(p, dayIndex),
        dayIndex,
        isNotHoliday,
        startDay,
        participants,
        absents
      };
      return <Day key={dayIndex} {...dayProps} />;
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
