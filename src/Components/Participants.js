import React from 'react';

class Participants extends React.Component
{
  constructor()
  {
    super();
    this.state = {value : ''};
  }
  handleChange(e)
  {
    this.setState({value : e.target.value});
  }
  renderParticipants()
  {

    return this.props.participants.map((p, i) => <li key={i}>{p} <a onClick={() => this.props.del(p)}>X</a></li>);
  }
  handleButton()
  {
    const {value} = this.state;
    if (value !== '')
    {
      this.props.add(value);
    }
  }
  render()
  {
    return <div>
      <p>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.state.value}/>
        <button onClick={this.handleButton.bind(this)}>Add participant</button>
      </p>
      <ul>{this.renderParticipants()}</ul>
    </div>;
  }
};

export default Participants;
