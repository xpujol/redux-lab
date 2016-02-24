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
    const {participants, del} = this.props;
    return participants.map(function(participant, i)
    {
      const {name} = participant;
      return <li key={i}>
        {name}<a href="#" onClick={() => del(name)}>[x]</a>
      </li>;
    });
  }
  handleSubmit(e)
  {
    e.preventDefault();

    const {value} = this.state;
    const {add, participants} = this.props;

    if ((value === '') || participants.map(p => p.name).includes(value))
    {
      return;
    }
    add(value);
    this.setState({value : ''});
  }
  render()
  {
    return <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <p>
          <input onChange={this.handleChange.bind(this)} type="text" value={this.state.value}/>
          <button>Add participant</button>
        </p>
      </form>
      <ul>{this.renderParticipants()}</ul>
    </div>;
  }
};

export default Participants;
