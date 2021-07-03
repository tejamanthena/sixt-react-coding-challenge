import { Epic } from 'redux-observable';
import { filter, map, switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ActionType, isActionOf } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import * as actions from '../actions';
import { RootState } from '../reducers';
import * as eventsApis from '../api/events.api';
import { OffersRequestPayload, OffersResponsePayloadDTO, ErrorResponseDTO } from '../../models/events.interface';


type Action = ActionType<typeof actions>;

export const getOffersEpic: Epic<Action, Action, RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(actions.getOffers)),
    switchMap((action) =>
      from(eventsApis.getOffersRequest(action.payload as OffersRequestPayload)).pipe(
        map((response: AxiosResponse<OffersResponsePayloadDTO> | any) => actions.getOffersSuccess(response.data)),
        catchError((error: AxiosResponse<ErrorResponseDTO> | any) => of(actions.getOffersError(error.response.data))
        ),
      )));

export default [
  getOffersEpic
];

