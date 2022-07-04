import { setTrack } from '@renderer/store/player';
import { useDispatch } from 'react-redux';

export const useTrackSelector = () => {
  //const dispatch = useDispatch();

  async function openTrack() {
    /* ToDo: Try to retrieve the "Track" object from the main thread here and assign it to the store, using the setTrack
    *   action. */
    console.log('Not implemented!');
    //dispatch(setTrack(track));
  }

  return { openTrack };
}
