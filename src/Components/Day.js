import React  from 'react';
import moment from 'moment';

const toggleStyle = {fontSize : 10};

class Day extends React.Component
{
  renderWorking()
  {
    const {participants, absents, dayIndex, set_absent, unset_absent} = this.props;
    const list = participants.map(function(participant, index)
    {
      const isAbsent = !!absents.find(function(absent)
      {
        const {p, d} = absent;
        return (index === p) && (dayIndex === d);
      });

      const toggleAbsent = () => isAbsent ? unset_absent(index) : set_absent(index);

      return <li key={index} style={{color : isAbsent ? 'red' : 'green'}} >
        {participant}{isAbsent ? ' ' : ' : 2 '}
        <a href="#" style={toggleStyle} onClick={toggleAbsent}>Toggle</a>
      </li>;
    });
    return <ul>{list}</ul>;
  }
  render()
  {
    const {isNotHoliday, startDay, toggle, dayIndex} = this.props;
    return <td style={{height: 200, width: 200, border: '1px solid black'}}>
      <p>{moment(startDay).add(dayIndex < 5 ? dayIndex : dayIndex + 2, 'd').format('ddd, DD/MM/YYYY')}</p>
      {isNotHoliday ? this.renderWorking() : <h5>Holiday</h5>}
      <button onClick={toggle}>Toggle holiday</button>
    </td>;
  }
};

export default Day;
