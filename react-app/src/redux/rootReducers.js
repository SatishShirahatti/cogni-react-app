import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import RightNowReducer from './rightnow/rightnow.reducer';
import FourCardReducer from './fourcards/fourcard.reducer';
import AirportListReducer from './airportList/airportlist.reducer';


const persistConfig = {
  key: 'root',
  storage,

};

const rootReducer = combineReducers({
	rightNow: RightNowReducer,
	fourcard: FourCardReducer,
	airportList: AirportListReducer,
});

export default persistReducer(persistConfig, rootReducer);