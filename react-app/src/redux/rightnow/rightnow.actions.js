import RightActionTypes from './rightnow.types';

export const rightNow_Start = () => ({
	type: RightActionTypes.FETCH_RIGHTNNOW_START
});

export const rightNow_Success = RightNowData => ({
	type: RightActionTypes.FETCH_RIGHTNNOW_SUCCESS,
	payload: RightNowData
});

export const rightNow_Failure = errorMessage => ({
	type: RightActionTypes.FETCH_RIGHTNNOW_FAILURE,
	payload: errorMessage
});