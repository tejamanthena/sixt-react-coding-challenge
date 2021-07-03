
export interface ErrorResponseDTO {
  errorCode: string;
  errorDetailsMessage: string;
  message: string;
  title: string;
}


export interface OffersRequestPayload {
  originPlaceId: string;
  selectedStartDate: string;
  duration: string;
  type: string;
}

export interface OffersResponsePayloadDTO {

  amount: number;
  amountMin: number;
  amountNet: number;
  appliedPromotions: [];
  cancellationPolicy: {
    id: number;
    name: string;
    parameters: [
      {
        fee: number;
        time: number;
      }
    ];
    rideType: string;
  },
  companyId: any;
  currency: string;
  distance: any;
  duration: number;
  estimatedArrivalTime: any;
  finalAmountGross: number;
  finalAmountMin: number;
  finalAmountNet: number;
  fixed: boolean;
  group: string;
  isPreselected: boolean;
  isReturnRideAvailable: boolean;
  offerIdentifier: string;
  onDemand: boolean;
  priceVary: boolean;
  provider: string;
  reversed: boolean;
  sixtCustomerNumber: number;
  vat: number;
  vehicleType: {
    airportFreeWaitingTime: number;
    benefits: [];
    brand: string;
    brandTermsAndConditions: any;
    category: string;
    class: string;
    code: string;
    defaultFreeWaitingTime: number;
    description: string;
    id: number;
    imageType: string;
    images: {
    };
    logo: {
    };
    marketingImages: [

    ];
    milesRedemption: boolean;
    mobileLogo: any;
    name: string;
    nrOfBaggage: number;
    nrOfPassengers: number;
    onDemand: boolean;
    onDemandCapability: string;
    priceVary: boolean;
    roamingType: string;
    title: string;
  },
  voucherAmount: number;
  voucherCode: any;
}
