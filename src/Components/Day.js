import React from 'react';

class Day extends React.Component
{
  renderWorking()
  {
    const {participants, absents, dayIndex, set_absent, unset_absent} = this.props;
    const toggleStyle = {fontSize : 10};
    const list = participants.map(function(participant, index)
    {
      const isAbsent = !!absents.find(function(absent)
      {
        const {p, d} = absent;
        return (index === p) && (dayIndex === d);
      });

      const toggleAbsent = isAbsent ?
        () => unset_absent(index, dayIndex) : () => set_absent(index, dayIndex);

      return <li key={index} style={{color : isAbsent ? 'red' : 'green'}} >
        {participant}{isAbsent ? ' ' : ' : 2 '}
        <a href="#" style={toggleStyle} onClick={toggleAbsent}>Toggle</a>
      </li>;
    });
    return <ul>{list}</ul>;
  }
  render()
  {
    const {isNotHoliday, thisDay, toggle} = this.props;
    return <td style={{height: 200, width: 200, border: '1px solid black'}}>
      <p>{thisDay}</p>
      {isNotHoliday ? this.renderWorking() : <h5>Holiday</h5>}
      <button onClick={toggle}>Toggle holiday</button>
    </td>;
  }
};

export default Day;
