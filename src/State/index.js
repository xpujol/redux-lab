import { createStore, combineReducers, compose } from 'redux';
import participants from './Participants';
import absents from './Absents';
import days from './Days';
import startDay from './StartDay';
import percentage from './Percentage';

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const reducers = combineReducers({participants, absents, days, startDay, percentage});
const store = finalCreateStore(reducers);

export default store;
