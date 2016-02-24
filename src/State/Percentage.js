const CHANGE_PERCENTAGE = 'Percentage/Change';

export function ChangePercentage(percentage)
{
  return {type : CHANGE_PERCENTAGE, percentage};
}

const defaultPercentage = parseInt(window.localStorage.percentage, 10) || 70;

const reducer = function(state = defaultPercentage, action)
{
  const {type, percentage} = action;
  switch(action.type)
  {
    case CHANGE_PERCENTAGE:
      return percentage;
    default:
      return state;
  }
};

export default reducer;
