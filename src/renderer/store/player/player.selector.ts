import { RootState } from '@renderer/store';

export const selectCurrentTrack = (state: RootState) => state.player.track;
