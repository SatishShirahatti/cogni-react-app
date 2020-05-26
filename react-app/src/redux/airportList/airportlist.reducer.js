//import { AirportList_Start, AirportList_Success, AirportList_Failure}  from './airportlist.action';

import * as AirportListActionTypes from './airportlist.types';
import  fetchData from "./aiportApi"


const INITIAL_STATE = {
	airportList: fetchData,
	isFetching: false,
	errorMessage: undefined
};


const AirportListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AirportListActionTypes.FETCH_AIRPORTLIST_START:
			return {
				...state,
				isFetching: true

			};
		case AirportListActionTypes.FETCH_AIRPORTLIST_SUCCESS:
			return {
				...state,
				airportList: action.payload,
				isFetching: false,
			};
		case AirportListActionTypes.FETCH_AIRPORTLIST_ERROR:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;

	}
};

export default AirportListReducer;
