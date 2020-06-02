

import * as AirportListActionTypes from './airportlist.types';

export const AirportList_Start = () => ({
	type: AirportListActionTypes.FETCH_AIRPORTLIST_START
});

export const AirportList_Success = (airportList) => ({
	type: AirportListActionTypes.FETCH_AIRPORTLIST_SUCCESS,
	payload: airportList
});

export const AirportList_Failure = errorMessage => ({
	type: AirportListActionTypes.FETCH_AIRPORTLIST_ERROR,
	payload: errorMessage
});