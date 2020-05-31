import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as JobNorgeActionTypes from './jobnorge.types';
import { JobNorgeData_Success, JobNorgeData_Failure} from "./jobnorge.action";
import fetchData from "./jobNorgeApi"

export function* getJobNorgeApiData() {

try {
	const JobNorgeData = yield call(fetchData);
	yield put(JobNorgeData_Success(JobNorgeData))
} catch (error) {
	yield put(JobNorgeData_Failure())
}

}
export function* fetchJobNorgeData() {
	yield takeLatest(
		JobNorgeActionTypes.FETCH_JOBNORGE_START,
		getJobNorgeApiData
	);
}

export function* JobNorgeSaga() {
	yield all([call(fetchJobNorgeData)]);
}
