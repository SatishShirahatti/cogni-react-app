import FourCardActionTypes from './fourcard.types';

export const FourCard_Start = () => ({
	type: FourCardActionTypes.FETCH_FOURCARD_START
});

export const FourCard_Success = FourCardData => ({
	type: FourCardActionTypes.FETCH_FOURCARD_SUCCESS,
	payload: FourCardData
});

export const FourCard_Failure = errorMessage => ({
	type: FourCardActionTypes.FETCH_FOURCARD_FAILURE,
	payload: errorMessage
});