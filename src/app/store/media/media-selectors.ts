import { MediaState } from './media-reducers';

export const selectMedias = (state: MediaState) => state.mediaState.medias;
