import React      from 'react';

class Calendar extends React.Component
{
  renderFirstWeek()
  {
    return this.renderWeek([0,1,2,3,4]);
  }
  renderLastWeek()
  {
    return this.renderWeek([6,7,8,9]);

  }
  renderWeek(days)
  {
    return this.props.days.map(function(day)
    {
      if (!days.includes(day))
      {
        return null;
      }
      if (day === false)
      {
        return <td>Festiu!</td>;
      }
      const partipants = this.props.absent.map(function(a)
      {
        //TODO !!
      });
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
