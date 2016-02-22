import moment from 'moment';

const CHANGE_START_DAY = 'StartDay/Change';

export function ChangeStartDay(date)
{
  return {type : CHANGE_START_DAY, date};
}

const today = moment();
const nextMonday = today.day() <= 1 ? today.day(1) : today.day(8);

const reducer = function(state = nextMonday, action)
{
  const {type, date} = action;
  switch(type)
  {
    case CHANGE_START_DAY:
      return date;
    default:
      return state;
  }
};

export default reducer;
