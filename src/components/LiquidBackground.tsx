import { useEffect } from 'react';
import { usePlayer } from '@/contexts/PlayerContext';
import { getImg } from '@/lib/api';

const LiquidBackground = () => {
  const { currentSong } = usePlayer();

  useEffect(() => {
    const url = currentSong ? getImg(currentSong.image, '500x500') : '';
    document.documentElement.style.setProperty(
      '--poster-bg',
      url ? `url("${url}")` : 'none'
    );
  }, [currentSong]);

  return <div className="liquid-bg" aria-hidden />;
};

export default LiquidBackground;