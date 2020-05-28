import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as JobNorgeActionTypes from './jobnorge.types';
import { FetchJobNorge_Success, FetchJobNorge_Failure} from "./jobnorge.action";
import fetchJobData from "./jobnorgeApi"

export function* getJobNorgeData() {

try {
	const jobNorgeList = yield call(fetchJobData);
	yield put(FetchJobNorge_Success(jobNorgeList))
} catch (error) {
	yield put(FetchJobNorge_Failure())
}

}
export function* fetchJobNorge() {
	yield takeLatest(
		JobNorgeActionTypes.FETCH_JOBNORGELIST_START,
		getJobNorgeData
	);
}

export function* JobNorgeSaga() {
	yield all([call(fetchJobNorge)]);
}
