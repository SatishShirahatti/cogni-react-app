import FourCardActionTypes from './fourcard.types';
import FourCard_Data from "../../components/fourcards/fourcardjson";

const INITIAL_STATE = {
	FourCardData: FourCard_Data,
	isFetching: false,
	errorMessage: undefined
};

const FourCardReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FourCardActionTypes.FETCH_FOURCARD_START:
			return {
				...state,
				isFetching: true

			};
		case FourCardActionTypes.FETCH_FOURCARD_SUCCESS:
			return {
				...state,
				RightNowData: action.payload,
				isFetching: false,
			};
		case FourCardActionTypes.FETCH_FOURCARD_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;

	}
};

export default FourCardReducer;