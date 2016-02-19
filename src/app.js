import React from 'react';
import Calendar from './Components/Calendar';
import DatePicker from './Components/DatePicker';
import Participants from './Components/Participants';
import Result from './Components/Result';
import {AddParticipant, RemoveParticipant} from './State/Participants';
import {ToggleDay} from './State/Days';
import {ChangeStartDay} from './State/StartDay';
import {ChangePercentage} from './State/Percentage';

import { connect } from 'react-redux';

class App extends React.Component
{
  render()
  {
    const {dispatch, startDay, participants, percentage} = this.props;

    const add_participant = n => dispatch(AddParticipant(n));
    const remove_participant = n => dispatch(RemoveParticipant(n));

    const toggle_day = n => dispatch(ToggleDay(n));

    const change_start_day = n => dispatch(ChangeStartDay(n));

    const change_percentage = n => dispatch(ChangePercentage(n));

    return <div>
      <DatePicker date={startDay} change_date={change_start_day}/>
      <Participants add={add_participant} del={remove_participant} participants={participants} />
      <Calendar {...this.props} toggle={toggle_day} />
      <Result change_percentage={change_percentage} {...this.props} />
    </div>;
  }
};

const select = function(state) {
  const  {participants, absents, percentage, startDay, days} = state;
  return {participants, absents, percentage, startDay, days};
};


export default connect(select)(App);
