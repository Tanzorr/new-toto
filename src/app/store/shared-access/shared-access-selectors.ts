import { SharedAccessState } from './shared-access-reducers';

export const notAccessedUsersSelector = (state: SharedAccessState) => {
  return state.accessState?.notAccessedUses;
};

export const accessedUsersSelector = (state: SharedAccessState) => {
  return state.accessState?.accessedUsers;
};
