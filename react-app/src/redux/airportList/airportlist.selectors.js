import { createSelector } from 'reselect';

export default state => state.airportList;

export const selectCollections = createSelector(
	//[selectRightNow],
	airportList => airportList.collections
);

export const selectIsCollectionFetching = createSelector(
	//	[selectRightNow],
	airportList => airportList.isFetching
);