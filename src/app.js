import React from 'react';
import Calendar from './Components/Calendar';
import DatePicker from './Components/DatePicker';
import Participants from './Components/Participants';
import Result from './Components/Result';

class App extends React.Component
{
  render()
  {
    const {start_day, participants} = this.props;

    return <div>
      <DatePicker date={start_day}/>
      <Participants participants={participants} />
      <Calendar {...this.props} />
      <Result />
    </div>;
  }
};

export default App;
