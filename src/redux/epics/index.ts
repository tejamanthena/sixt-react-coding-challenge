import { combineEpics } from 'redux-observable';
import eventsEpics from './events.epic';

const epics = combineEpics(
  ...eventsEpics,
)

export default epics;