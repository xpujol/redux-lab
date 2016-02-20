import React  from 'react';
import moment from 'moment';

const format = 'YYYY-MM-DD';

class DatePicker extends React.Component
{
  handleChange(e)
  {
    const value = moment(e.target.value, format).format();
    if (value !== '')
    {
      this.props.change_date(value);
    }
  }
  render()
  {
    const dateFormatted = moment(this.props.date).format(format);

    return <input type="date" value={dateFormatted} onChange={this.handleChange.bind(this)}/>;
  }
};

export default DatePicker;
