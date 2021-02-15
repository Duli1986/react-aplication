import { createSelector } from 'reselect';
import { identity, length, prop, propOr } from 'ramda';
import { isNotEmpty } from 'ramda-extension';

export const getPeopleObject = createSelector(identity, prop('peopleResult'));

/**
 * Returns the search results
 *
 * @documented
 * @category Selector
 * @return {Array} searchResult
 * @example
 *
 *    getSearchResult(state)
 *
 */

export const getPeopleResult = createSelector(getPeopleObject, prop('list'));

export const isSearchPerformed = createSelector(getPeopleObject, isNotEmpty);

export const searchTypePerformed = createSelector(getPeopleObject, prop('searchPerformedType'));

export const searchResultCount = createSelector(getPeopleObject, length);

export const getItemsFound = createSelector(getPeopleObject, prop('itemsFound'));

export const getSearchApiErrors = createSelector(identity, propOr({}, 'searchError'));

export const getSearchErrorCode = createSelector(getSearchApiErrors, prop('errorCode'));
