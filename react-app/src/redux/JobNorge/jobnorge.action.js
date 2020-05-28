
import * as JobNorgeActionTypes from './jobnorge.types';

export const FetchJobNorge_Start = () => ({
	type: JobNorgeActionTypes.FETCH_JOBNORGELIST_START
});

export const FetchJobNorge_Success = (jobNorgeList) => ({
	type: JobNorgeActionTypes.FETCH_JOBNORGELIST_SUCCESS,
	payload: jobNorgeList
});

export const FetchJobNorge_Failure = errorMessage => ({
	type: JobNorgeActionTypes.FETCH_JOBNORGELIST_ERROR,
	payload: errorMessage
});