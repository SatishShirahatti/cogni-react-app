import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { AirportList_Success, AirportList_Start, AirportList_Failure} from "./airportlist.action";
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
		AirportList_Start,
		getAirportApiData
	);
}

export function* AirportListSaga() {
	yield all([call(fetchAirportList)]);
}
