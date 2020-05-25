import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	rightNow_Success,
	rightNow_Failure
} from './rightnow.actions';
import RightActionTypes from './rightnow.types';
import Rightnow_Data from '../../components/rightNow/rightnowdata';

export function* fetchRightNowAsync(){
	try {	
		yield put(rightNow_Success(Rightnow_Data))
	} catch (error) {
		yield put(rightNow_Failure(error.message));
	}

}
export function* fetchrightNowStart() {
	yield takeLatest(
		RightActionTypes.FETCH_RIGHTNNOW_START,
		fetchRightNowAsync
	);
}

export function* RightNowSagas() {
	yield all([call(fetchrightNowStart)]);
}
