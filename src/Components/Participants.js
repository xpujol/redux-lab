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
    return participants.map((p, i) => <li key={i}>
      {p} <a href="#" onClick={() => del(p)}>[x]</a>
    </li>);
  }
  handleSubmit(e)
  {
    e.preventDefault();

    const {value} = this.state;
    if (value !== '')
    {
      this.props.add(value);
      this.setState({value : ''});
    }
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
