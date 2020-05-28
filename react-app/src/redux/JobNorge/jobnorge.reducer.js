//import { AirportList_Start, AirportList_Success, AirportList_Failure}  from './airportlist.action';

import * as JobNorgeActionTypes from './jobnorge.types';
import fetchJobData from "./jobnorgeApi";


const INITIAL_STATE = {
	jobNorgeList: fetchJobData,
	isFetching: false,
	errorMessage: undefined
};


const JobNorgeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case JobNorgeActionTypes.FETCH_JOBNORGELIST_START:
			return {
				...state,
				isFetching: true

			};
		case JobNorgeActionTypes.FETCH_JOBNORGELIST_SUCCESS:
			return {
				...state,
				jobNorgeList: action.payload,
				isFetching: false,
			};
		case JobNorgeActionTypes.FETCH_JOBNORGELIST_ERROR:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;

	}
};

export default JobNorgeReducer;
