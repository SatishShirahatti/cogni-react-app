import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as AirportListActionTypes from './airportlist.types';
import { AirportList_Success, AirportList_Failure} from "./airportlist.action";
import fetchData from "./aiportApi"

export function* getAirportApiData() {

try {
	const airportList = yield call(fetchData);
	yield put(AirportList_Success(airportList))
} catch (error) {
	yield put(AirportList_Failure())
}

}
export function* fetchAirportList() {
	yield takeLatest(
		AirportListActionTypes.FETCH_AIRPORTLIST_START,
		getAirportApiData
	);
}

export function* AirportListSaga() {
	yield all([call(fetchAirportList)]);
}
