import React      from 'react';

class DatePicker extends React.Component
{
  render()
  {
    return <input type="date" value={this.props.date} onChange={() => {}}/>;
  }
};

export default DatePicker;
