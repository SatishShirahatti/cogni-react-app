
import * as JobNorgeActionTypes from './jobnorge.types';
import  fetchData from "./jobNorgeApi"


const INITIAL_STATE = {
	JobNorgeData: fetchData,
	isFetching: false,
	errorMessage: undefined
};


const JobNorgeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case JobNorgeActionTypes.FETCH_JOBNORGE_START:
			return {
				...state,
				isFetching: true

			};
		case JobNorgeActionTypes.FETCH_JOBNORGE_SUCCESS:
			return {
				...state,
				JobNorgeData: action.payload,
				isFetching: false,
			};
		case JobNorgeActionTypes.FETCH_JOBNORGE_ERROR:
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
