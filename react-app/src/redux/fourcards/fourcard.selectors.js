import { createSelector } from 'reselect';

export default state => state.fourcard;

export const selectCollections = createSelector(
	//[selectRightNow],
	fourcard => fourcard.collections
);

export const selectIsCollectionFetching = createSelector(
	//	[selectRightNow],
	fourcard => fourcard.isFetching
);