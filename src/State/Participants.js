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

const reducer = function(state = [], action)
{
  switch(action.type){
    case ADD_PARTICIPANT:
      return [...state, action.name];
    case REMOVE_PARTICIPANT:
      return state.filter(name => name !== action.name);
    default:
      return state;
  }
};

export default reducer;
