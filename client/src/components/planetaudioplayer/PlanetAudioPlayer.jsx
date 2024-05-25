import React, { useRef, useState, useEffect } from 'react';
import ImageMapper from 'react-img-mapper';
import { PlanetMapWrapper } from './PlanetMapWrapperElements';
import Tooltip from '../tooltip/Tooltip';

const PlanetAudioPlayer = ({ image, mapAreas, onSongEnd }) => {
  const audioPlayer = useRef();
  const [currentPlaying, setCurrentPlaying] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const mapWrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onAreaClicked = (area) => {
    // Check if the clicked area's song is the one currently playing.
    if (currentPlaying === area.href) {
      // If the song is currently playing, toggle between pause and play.
      setIsPlaying(!isPlaying);
    } else {
      // If a different song is clicked or nothing is playing, start the new song.
      if (currentPlaying && isPlaying) {
        // Pause the currently playing song.
        audioPlayer.current.pause();
      }
      // Set the new song as the current song, and play it.
      audioPlayer.current.src = area.href;
      setCurrentPlaying(area.href);
      setIsPlaying(true);
    }
  };

  const onAreaEnter = (area) => {
    const [x, y, radius] = area.coords;
    setTooltip(area.title);
    const offsetX = -50;
    const offsetY = -20;
    setTooltipPos({
      left: x + offsetX,
      top: y - radius + offsetY,
    });
  };

  const onAreaLeave = () => {
    setTooltip("");
    setTooltipPos({ top: 0, left: 0 });
  };

  // UseEffect for managing audio playback and cleanup
  useEffect(() => {
    const audioEl = audioPlayer.current;
    
    // Play/pause handling
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }

    // Event listener for when the song ends
    const handleSongEnd = () => {
      setCurrentPlaying("");
      setIsPlaying(false);
    };

    audioEl.addEventListener("ended", handleSongEnd);

    // Cleanup function
    return () => {
      audioEl.removeEventListener("ended", handleSongEnd);
    };
  }, [isPlaying, currentPlaying]);

  // Before returning the JSX, check if mapAreas are defined and structured correctly
  if (!mapAreas || !mapAreas.areas) {
    console.error('mapAreas is undefined or not structured correctly:', mapAreas);
    return null; // Return null to prevent rendering if mapAreas is not ready
  }

  return (
    <div>
      <PlanetMapWrapper ref={mapWrapperRef}>
        <ImageMapper
          src={image}
          map={{ name: 'thoughts-map', areas: mapAreas.areas }} // Use the areas property of mapAreas
          onClick={onAreaClicked}
          onMouseEnter={onAreaEnter}
          onMouseLeave={onAreaLeave}
          width={1779}
          height={860}
          fillColor="transparent"
        />
        {tooltip && (
          <Tooltip top={tooltipPos.top} left={tooltipPos.left} show={tooltip !== ""}>
            {tooltip}
          </Tooltip>
        )}
      </PlanetMapWrapper>
      <audio ref={audioPlayer} preload="metadata" />
    </div>
  );
};

export default PlanetAudioPlayer;