import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	FourCard_Success,
	FourCard_Failure
} from './fourcard.action';
import FourCardActionTypes from './fourcard.types';
import FourCard_Data from "../../components/fourcards/fourcardjson";

export function* fetchFourCardAsync() {
	try {
		yield put(FourCard_Success(FourCard_Data))
	} catch (error) {
		yield put(FourCard_Failure(error.message));
	}

}
export function* fetchFourCardStart() {
	yield takeLatest(
		FourCardActionTypes.FETCH_FOURCARD_START,
		fetchFourCardAsync
	);
}

export function* FourCardSagas() {
	yield all([call(fetchFourCardStart)]);
}
