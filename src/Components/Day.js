import React from 'react';

class Day extends React.Component
{
  renderHoliday()
  {
    return <h5>Holiday</h5>
  }
  renderWorking()
  {
    const {participants, absents, index} = this.props;
    const list = participants.map(function(p)
    {
      const is_absent = !!absents.find(function(absent)
      {
        return (participants.indexOf(p) === absent.p) && (index === absent.d);
      });
      return <li key={p+'_'+index} style={{color : is_absent ? 'red' : 'green'}} >{p}{is_absent ? '' : ' : 2'}</li>;
    });
    return <ul>{list}</ul>;
  }
  render()
  {
    return <td style={{height:200, width: 200, border: '1px solid black'}}>
      <p>{this.props.thisDay}</p>
      {this.props.day ? this.renderWorking() : this.renderHoliday()}
      <button onClick={this.props.toggle}>Toggle holiday</button>
    </td>;
  }
};

export default Day;
