import {createStore, combineReducers, compose} from 'redux';
import participants                            from './Participants';
import days                                    from './Days';
import startDay                                from './StartDay';
import percentage                              from './Percentage';

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const reducers = {participants, days, startDay, percentage};
const store = finalCreateStore(combineReducers(reducers));

store.subscribe(function()
{
  const {percentage, participants} = store.getState();
  window.localStorage.setItem('percentage', percentage);
  window.localStorage.setItem('participants', JSON.stringify(participants.map(p => p.name)));
});

export default store;
