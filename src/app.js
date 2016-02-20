import React from 'react';
import {connect} from 'react-redux';
import Calendar from './Components/Calendar';
import DatePicker from './Components/DatePicker';
import Participants from './Components/Participants';
import Result from './Components/Result';
import {AddParticipant, RemoveParticipant} from './State/Participants';
import {SetAbsent, UnsetAbsent} from './State/Absents';
import {ToggleDay} from './State/Days';
import {ChangeStartDay} from './State/StartDay';
import {ChangePercentage} from './State/Percentage';

class App extends React.Component
{
  render()
  {
    const {dispatch, startDay, participants, percentage} = this.props;

    const add_participant = n => dispatch(AddParticipant(n));
    const remove_participant = n => dispatch(RemoveParticipant(n));

    const set_absent = (p, d) => dispatch(SetAbsent(p, d));
    const unset_absent = (p, d) => dispatch(UnsetAbsent(p, d));

    const toggle_day = n => dispatch(ToggleDay(n));

    const change_start_day = n => dispatch(ChangeStartDay(n));

    const change_percentage = n => dispatch(ChangePercentage(n));

    return <div>
      <DatePicker date={startDay} change_date={change_start_day}/>
      <Participants add={add_participant} del={remove_participant} participants={participants} />
      <Calendar {...this.props} {...{toggle_day, set_absent, unset_absent}} />
      <Result change_percentage={change_percentage} {...this.props} />
    </div>;
  }
};

const select = function(state) {
  const  {participants, absents, percentage, startDay, days} = state;
  return {participants, absents, percentage, startDay, days};
};


export default connect(select)(App);
