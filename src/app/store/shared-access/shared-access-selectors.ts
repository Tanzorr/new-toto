import { SharedAccessState } from './shared-access-reducers';

export const notAccessedUsersSelector = (state: SharedAccessState) => {
  return state.accessState?.notAccessedUses;
};
