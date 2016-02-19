const TOGGLE_DAY = 'Day/ToggleDay';

export function ToggleDay(index)
{
  return {type : TOGGLE_DAY, index};
}

const numDays = 10;
const fullWeek = Array.apply(0, Array(numDays)).map(n => true);

const reducer = function(state = fullWeek, action)
{
  switch(action.type){
    case TOGGLE_DAY:
      return state.map((day, i) => i === action.index ? !day : day);
    default:
      return state;
  }
};

export default reducer;
