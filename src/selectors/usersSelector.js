import { createSelector } from 'reselect';

const getUsers = (state) => state.users;

export const makeUsersSelector = createSelector(
    [getUsers],
    (users) => users
);
