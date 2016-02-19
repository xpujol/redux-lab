const CHANGE_PERCENTAGE = 'Percentage/Change';

export function ChangePercentage(percentage)
{
  return {type : CHANGE_PERCENTAGE, percentage};
}

const reducer = function(state = 70, action)
{
  switch(action.type){
    case CHANGE_PERCENTAGE:
      return action.percentage;
    default:
      return state;
  }
};

export default reducer;
