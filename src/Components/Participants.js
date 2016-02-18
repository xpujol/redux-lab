import React from 'react';

class Participants extends React.Component
{
  renderParticipants()
  {
    return this.props.participants.map((p, i) => <li key={i}>{p}</li>);
  }
  render()
  {
    return <div>
      <p>
        <input type="text" />
        <button>Add participant</button>
      </p>
      <ul>{this.renderParticipants()}</ul>
    </div>;
  }
};

export default Participants;
