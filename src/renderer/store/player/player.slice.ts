import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Track } from '@shared/track';

export interface PlayerSlice {
  track: Track | null;
}

const initialState: PlayerSlice = {
  track: null,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<Track | null>) => {
      state.track = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTrack } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;

export default playerReducer;
