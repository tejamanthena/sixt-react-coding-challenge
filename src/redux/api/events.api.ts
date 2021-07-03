import axios, { AxiosResponse } from 'axios';
import { OffersRequestPayload, OffersResponsePayloadDTO, ErrorResponseDTO } from '../../models/events.interface';

const hosts = "https://www.mydriver.com/api/v5";
const endpoint = "offers";

export const getOffersRequest = (
  data: OffersRequestPayload,
): Promise<AxiosResponse<OffersResponsePayloadDTO | ErrorResponseDTO>> => {
  return axios.post(`${hosts}/${endpoint}`, data, {
    headers: { 'Content-Type': 'application/json' },
  });
}
