import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import dataStub from '../../resources/dataStub';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import TourCard from './TourCard';
import { OffersResponsePayloadDTO } from '../../models/events.interface';
import styles from './Card.module.css';

const Tours = () => {
  const dispatch = useDispatch();
  const { selectedEvent, selectedEventError } = useSelector((state: RootState) => state.events);
  const [locationId, setLocation] = useState('');
  const [duration, setDuration] = useState(0);
  const [value, setDateTime] = useState(new Date());

  const onChangeLocation = (e: any) => {
    dispatch(actions.clearGetOffers());
    setLocation(e.target.value);
  };

  const onChangeDateTime = (e: any) => {
    dispatch(actions.clearGetOffers());
    setDateTime(e);
  };

  const onChangeDuration = (e: any) => {
    dispatch(actions.clearGetOffers());
    setDuration(e.target.value * 60);
  };

  const dispatchActions = () => {
    dispatch(
      actions.getOffers({
        originPlaceId: locationId,
        selectedStartDate: value.toISOString().slice(0, 16),
        duration: duration.toString(),
        type: 'DURATION',
      }),
    );
  };

  useEffect(() => {
    if (locationId && duration && value) {
      dispatchActions();
    }
  }, [locationId, duration, value]);

  return (
    <>
      
      <div>
        <label>Choose a location</label>
        <select style={{ marginLeft: '20px', height: '30px', borderRadius: '3px', fontSize: '15px' }} 
        onChange={onChangeLocation} defaultValue={''}>
          <option value='' disabled>
            {'Click to see options'}
          </option>
          {dataStub.pickupLocation.map(pl => {
            return (
              <option key={pl.googlePlaceId} value={pl.googlePlaceId}>
                {pl.label}
              </option>
            );
          })}
        </select>
      </div>
      <div style={{ marginTop: '20px' }}>
        <label style={{ marginRight: '20px' }}>Select Date</label>
        <DateTimePicker onChange={onChangeDateTime} value={value} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <label style={{ marginRight: '20px' }}>Duration (in hours)</label>
        <select style={{ marginLeft: '20px', height: '30px', borderRadius: '3px', fontSize: '15px' }} onChange={onChangeDuration} defaultValue={0}>
          <option value={0} disabled>
            {'Click to see options'}
          </option>
          {dataStub.duration.map(duration => {
            return (
              <option key={duration} value={duration}>
                {duration}
              </option>
            );
          })}
        </select>
      </div>
      <div className="card-container">
        {selectedEvent.map((item: OffersResponsePayloadDTO) => {
          return <TourCard key={item.vehicleType.id} data={item} />;
        })}
      </div>
      {selectedEventError && (
        <div className={styles.error}>
          <h4>Error Code: {selectedEventError.errorCode}</h4>
          <h5>Details: {selectedEventError.message}</h5>
        </div>
      )}
    </>
  );
};

export default Tours;
