

import * as JobNorgeActionTypes from './jobnorge.types';

export const JobNorgeData_Start = () => ({
	type: JobNorgeActionTypes.FETCH_JOBNORGE_START
});

export const JobNorgeData_Success = (JobNorgeData) => ({
	type: JobNorgeActionTypes.FETCH_JOBNORGE_SUCCESS,
	payload: JobNorgeData
});

export const JobNorgeData_Failure = errorMessage => ({
	type: JobNorgeActionTypes.FETCH_JOBNORGE_ERROR,
	payload: errorMessage
});