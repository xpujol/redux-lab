const ADD_PARTICIPANT = 'Participant/AddParticipant';
const REMOVE_PARTICIPANT = 'Participant/RemoveParticipant';

export function AddParticipant(name)
{
  return {type : ADD_PARTICIPANT, name};
}

export function RemoveParticipant(name)
{
  return {type : REMOVE_PARTICIPANT, name};
}

const defaultParticipants = window.localStorage.participants ?
                            JSON.parse(window.localStorage.participants) : [];

const reducer = function(state = defaultParticipants, action)
{
  const {type, name} = action;
  switch(type)
  {
    case ADD_PARTICIPANT:
      return [...state, name];
    case REMOVE_PARTICIPANT:
      return state.filter(n => n !== name);
    default:
      return state;
  }
};

export default reducer;
