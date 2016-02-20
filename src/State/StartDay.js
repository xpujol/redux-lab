import moment from 'moment';

const CHANGE_START_DAY = 'StartDay/Change';

export function ChangeStartDay(date)
{
  return {type : CHANGE_START_DAY, date};
}

const nextMonday = moment().day(8);

const reducer = function(state = nextMonday, action)
{
  switch(action.type)
  {
    case CHANGE_START_DAY:
      return action.date;
    default:
      return state;
  }
};

export default reducer;
