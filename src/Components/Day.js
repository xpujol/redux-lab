import React from 'react';

class Day extends React.Component
{
  renderWorking()
  {
    const {participants, absents, index} = this.props;
    const list = participants.map(function(participant, i)
    {
      const isAbsent = !!absents.find(function(absent)
      {
        const {p, d} = absent;
        return (participants.indexOf(participant) === p) && (index === d);
      });
      return <li key={i} style={{color : isAbsent ? 'red' : 'green'}} >
        {participant}{isAbsent ? '' : ' : 2'}
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
