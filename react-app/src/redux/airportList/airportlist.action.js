

// export const REQUEST_API_DATA = "REQUEST_API_DATA";
// export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

// export const requestApiData = () => ({ type: REQUEST_API_DATA});
// export const receiveApiData = (airportList) => ({ type: RECEIVE_API_DATA, airportList })


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