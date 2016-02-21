import React  from 'react';
import moment from 'moment';

class Day extends React.Component
{
  renderWorking()
  {
    const {participants, absents, dayIndex,
           isSprintPlanDay, set_absent, unset_absent} = this.props;

    const list = participants.map(function(participant, index)
    {
      const isAbsent = !!absents.find(a => index === a.p && dayIndex === a.d);
      const toggleAbsent = () => isAbsent ? unset_absent(index) : set_absent(index);

      return <li key={index} style={{color : isAbsent ? 'red' : 'green'}} >
        {participant}
        {isAbsent ? ' ' : ' : ' + (isSprintPlanDay ? 1 : 2) + ' '}
        <a href="#" style={{fontSize : 10}} onClick={toggleAbsent}>Toggle</a>
      </li>;
    });
    return <ul>
      {isSprintPlanDay ? <h4>SPRINT PLAN</h4> : null}
      {list}
    </ul>;
  }
  render()
  {
    const {isNotHoliday, startDay, toggle, dayIndex, isDemoDay} = this.props;
    const content = isNotHoliday ?
                    (isDemoDay ? <h4>DEMO</h4> : this.renderWorking()) :
                    <h5>Holiday</h5>;
    return <td style={{height: 200, width: 200, border: '1px solid black'}}>
      <p>{moment(startDay).add(dayIndex < 5 ? dayIndex : dayIndex + 2, 'd').format('ddd, DD/MM/YYYY')}</p>
      {content}
      <button onClick={toggle}>Toggle holiday</button>
    </td>;
  }
};

export default Day;
