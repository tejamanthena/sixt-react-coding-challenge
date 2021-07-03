import { ActionType, getType } from 'typesafe-actions';
import { OffersResponsePayloadDTO, ErrorResponseDTO } from '../../models/events.interface';

import * as actions from '../actions';
import { getOffersSuccess, clearGetOffers, getOffersError } from '../actions';

type Action = ActionType<typeof actions>;

export interface EventsState {
  selectedEvent: OffersResponsePayloadDTO[]
  selectedEventError: ErrorResponseDTO | null;
}

const initialState = {
  selectedEvent: [] as OffersResponsePayloadDTO[],
  selectedEventError: null
}

export const eventsReducer = (state: EventsState = initialState, action: Action): EventsState => {
  switch (action.type) {
    case getType(getOffersSuccess):
      return { ...state, selectedEvent: action.payload, selectedEventError: null };
    case getType(getOffersError):
      return { ...state, selectedEvent: initialState.selectedEvent, selectedEventError: action.payload };
    case getType(clearGetOffers):
      return { ...state, selectedEvent: initialState.selectedEvent, selectedEventError: null };
    default:
      return state;
  }
}