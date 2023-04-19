import React from 'react';
import './howsprinklerswork.css'; // Optional: import your CSS file
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import LazyLoad from 'react-lazyload';

const HowSprinklersWork = () => {
  const videoId = 'NXAgjKDFc14'; // Replace with your YouTube video ID
  const startTime = 258; // Replace with your desired start time (in seconds)
  const endTime = 276; // Replace with your desired end time (in seconds)

  const videoId2 = 'JGIICiX2CNI';
  const startTime2 = 0;
  const endTime2 = 318;

  const opts2={
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      start: startTime2,
      end: endTime2,
    },
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      start: startTime,
      end: endTime,
      mute: 1,
    },
  };

  return (
    <div className='parent'>
        <div className='how-sprinklers-work'>
            <LazyLoad height={390} offset={10}>
        <YouTube videoId={videoId} opts={opts} />
        </LazyLoad>
        </div>
        <div className='how-sprinklers-work2'>
            <LazyLoad height={390} offset={10}>
            <YouTube videoId={videoId2} opts={opts2}/>
            </LazyLoad>
        </div>
    </div>
  );
};

export default HowSprinklersWork;
