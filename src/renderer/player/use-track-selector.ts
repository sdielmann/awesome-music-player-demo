import { setTrack } from '@renderer/store/player';
import useIpc from '@renderer/core/ipc/use-ipc';
import { useDispatch } from 'react-redux';

export const useTrackSelector = () => {
  const ipc = useIpc();
  const dispatch = useDispatch();

  async function openTrack() {
    const track = await ipc.titlebar.open_file();
    console.log('[AMP]: New track selected:', track);
    dispatch(setTrack(track));
  }

  return { openTrack };
}
