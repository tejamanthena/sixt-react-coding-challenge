import React from 'react';
import { OffersResponsePayloadDTO } from '../../models/events.interface';

import styles from './Card.module.css';

type TourCardProps = {
  data: OffersResponsePayloadDTO;
};

const TourCard = (props: TourCardProps) => {
  const { brand, category, name, description, nrOfBaggage, nrOfPassengers } = props.data.vehicleType;
  return (
      <div className={styles.card}>
        <h3>{name}</h3>
        <p>Brand: {brand}</p>
        <p>Type: {category}</p>
        <p>{description}</p>
        <p>Number of Baggage: {nrOfBaggage}</p>
        <p>Number of Passengers: {nrOfPassengers}</p>
      </div>
  );
};

export default TourCard;
