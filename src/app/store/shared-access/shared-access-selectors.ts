import { SharedAccessState } from './shared-access-reducers';

export const notAccessedUsersSelector = (state: SharedAccessState) =>
  state.accessState?.notAccessedUses;

export const accessedUsersSelector = (state: SharedAccessState) => state.accessState?.accessedUsers;
