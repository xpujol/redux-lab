import React from 'react';
import Day from './Day';
import moment from 'moment';

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
    const {startDay, participants, absents, toggle} = this.props;
    return this.props.days.map(function(isNotHoliday, index)
    {
      if (!days_of_week.includes(index))
      {
        return null;
      }
      const thisDay = moment(startDay).add(index < 5 ? index : index + 2, 'd').format('ddd, DD/MM/YYYY');
      const dayProps =
      {
        thisDay,
        isNotHoliday,
        participants,
        absents,
        index
      };
      return <Day key={index} toggle={() => toggle(index)} {...dayProps} />;
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
