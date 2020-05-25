import RightActionTypes from './rightnow.types';
import Rightnow_Data from "../../components/rightNow/rightnowdata";

const INITIAL_STATE = {
	RightNowData: Rightnow_Data,
	isFetching: false,
	errorMessage: undefined
};

const RightNowReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RightActionTypes.FETCH_RIGHTNNOW_START:
			return {
				...state,
				isFetching:true
				
			};
		case RightActionTypes.FETCH_RIGHTNNOW_SUCCESS:
			return {
				...state,
				RightNowData: action.payload,
				isFetching: false,
			};
		case RightActionTypes.FETCH_RIGHTNNOW_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;
	
	}
};

export default RightNowReducer;