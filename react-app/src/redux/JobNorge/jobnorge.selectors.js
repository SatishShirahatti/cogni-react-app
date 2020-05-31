import { createSelector } from 'reselect';

export default state => state.JobNorge;

export const selectCollections = createSelector(
	//[selectRightNow],
	JobNorge => JobNorge.collections
);

export const selectIsCollectionFetching = createSelector(
	//	[selectRightNow],
	JobNorge => JobNorge.isFetching
);