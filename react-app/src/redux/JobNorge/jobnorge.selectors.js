import { createSelector } from 'reselect';

const selector = state => state.JobNorge;
export default selector;

export const selectCollections = createSelector(
	selector,
	JobNorge => JobNorge.collections
);

export const selectIsCollectionFetching = createSelector(
	selector,
	JobNorge => JobNorge.isFetching
);