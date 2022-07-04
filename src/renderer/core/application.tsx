import './application.scss';
import React from 'react';
import { Player } from '@renderer/player';
import { useSelector } from 'react-redux';
import { selectCurrentTrack } from '@renderer/store/player';
import { useTrackSelector } from '@renderer/player/use-track-selector';
import { FiFolder } from 'react-icons/fi';

const Application: React.FC = () => {
  const { openTrack } = useTrackSelector();
  const track = useSelector(selectCurrentTrack);

  return (
    <div id='amp'>
      {track ? <Player track={track}/> : <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>Awesome Music Player</h1>
        </div>
        <button onClick={openTrack}>
          <FiFolder />
          Choose MP3...
        </button>
      </div>}
    </div>
  );
};

export default Application;
