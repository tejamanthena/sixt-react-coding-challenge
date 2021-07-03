import { combineReducers } from 'redux';
import { eventsReducer, EventsState } from './events.reducer';

export type RootState = {
  events: EventsState;
}

const reducers = combineReducers({
  events: eventsReducer,
})

export default reducers;