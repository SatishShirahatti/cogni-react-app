import { all, call } from 'redux-saga/effects';

import { RightNowSagas } from './rightnow/rightnow.sagas';
import { FourCardSagas } from './fourcards/fourcard.saga';
import { AirportListSaga } from './airportList/airportlist.saga';


export default function* rootSaga() {
	yield all([
	call(RightNowSagas),
	call(FourCardSagas),
	//call(AirportListSaga)
]
);
}