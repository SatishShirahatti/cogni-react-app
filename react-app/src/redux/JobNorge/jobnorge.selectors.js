import { createSelector } from 'reselect';

export default state => state.jobNorgeList;

export const selectCollections = createSelector(
	//[selectRightNow],
	jobNorgeList => jobNorgeList.collections
);

export const selectIsCollectionFetching = createSelector(
	//	[selectRightNow],
	jobNorgeList => jobNorgeList.isFetching
);