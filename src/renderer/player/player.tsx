import './player.scss';
import React, { useEffect, useRef, useState } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import type { Track } from '@shared/track';

interface PlayerProps {
  track: Track;
}

export const Player: React.FC<PlayerProps> = ({ track }) => {
  const player = useRef<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(false);
  const imgStyle = { backgroundImage: `url(${track?.meta?.cover})` }

  function togglePlayback() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (!player.current) {
      return;
    }

    if (isPlaying) {
      player.current.play();
    } else {
      player.current.pause();
    }
  }, [player, isPlaying])

  return (
    track
      ? <div className='player'>
        <audio src={track.data} ref={player} />
        <div className='player-cover'>
          <div className='player-cover-img-reflection' role='none' style={imgStyle} />
          <div className='player-cover-img' role='img' style={imgStyle} />
        </div>
        <div className='player-meta'>
          <h2 className='player-meta-artist'>{ track.meta.artist }</h2>
          <h1 className='player-meta-title'>{ track.meta.title }</h1>
          <h3 className='player-meta-album'>{ track.meta.album || track.meta.year }</h3>
          <div className='player-controls'>
            <button className='player-playback-btn player-playback-btn-play'
                    onClick={togglePlayback}>
              { isPlaying ? <FiPause /> : <FiPlay />}
            </button>
          </div>
        </div>
      </div>
      : <></>
  );
};
