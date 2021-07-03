import { applyMiddleware, compose, createStore } from 'redux';
import { ActionType } from 'typesafe-actions';
import { createEpicMiddleware } from 'redux-observable';

import * as actions from '../actions';
import reducers, { RootState } from '../reducers';
import epics from '../epics';

type Action = ActionType<typeof actions>;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

const configureStore = (initialState?: RootState) => {
  const middlewares = [epicMiddleware];
  const enhancer = compose(applyMiddleware(...middlewares));

  return createStore(reducers, initialState, enhancer);
};

export const store = configureStore();

epicMiddleware.run(epics);