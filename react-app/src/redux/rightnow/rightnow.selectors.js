import { createSelector } from 'reselect';

export default state => state.rightNow;

export const selectCollections = createSelector(
	//[selectRightNow],
	rightNow => rightNow.collections
);

export const selectIsCollectionFetching = createSelector(
//	[selectRightNow],
	rightNow => rightNow.isFetching
);