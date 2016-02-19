import React  from 'react';
import moment from 'moment';

class DatePicker extends React.Component
{
  handleChange(e)
  {
    const val = moment(e.target.value, 'YYYY-MM-DD').format();
    this.props.change_date(val);
  }
  render()
  {
    const {date} = this.props;
    const dateFormatted = moment(date).format('YYYY-MM-DD');

    return <input type="date" value={dateFormatted} onChange={this.handleChange.bind(this)}/>;
  }
};

export default DatePicker;
