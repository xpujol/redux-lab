const SET_ABSENT = 'Absent/SetAbsent';
const UNSET_ABSENT = 'Absent/UnsetAbsent';

export function SetAbsent(participant, day)
{
  return {type : SET_ABSENT, participant, day};
}

export function UnsetAbsent(participant, day)
{
  return {type : UNSET_ABSENT, participant, day};
}

const reducer = function(state = [], action)
{
  const {type, participant, day} = action;
  switch(type)
  {
    case SET_ABSENT:
      return [...state, {p : participant, d : day}];
    case UNSET_ABSENT:
      return state.filter(a => a.p !== participant || a.d !== day)
    default:
      return state;
  }
};

export default reducer;
