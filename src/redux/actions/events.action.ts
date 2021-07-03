import { createAction } from 'typesafe-actions';
import { OffersRequestPayload, OffersResponsePayloadDTO, ErrorResponseDTO } from '../../models/events.interface';

export const GET_OFFERS = 'GET_OFFERS';
export const GET_OFFERS_SUCCESS = 'GET_OFFERS_SUCCESS';
export const GET_OFFERS_ERROR = 'GET_OFFERS_ERROR';
export const CLEAR_GET_OFFERS = 'CLEAR_GET_OFFERS';


export const getOffers = createAction(GET_OFFERS, resolve => (payload: OffersRequestPayload) =>
  resolve(payload)
);

export const getOffersSuccess = createAction(
  GET_OFFERS_SUCCESS,
  resolve => (payload: OffersResponsePayloadDTO[]) =>
    resolve(payload),
);

export const getOffersError = createAction(
  GET_OFFERS_ERROR,
  resolve => (payload: ErrorResponseDTO) =>
    resolve(payload),
);

export const clearGetOffers = createAction(
  CLEAR_GET_OFFERS,
  resolve => () => resolve(),
);


