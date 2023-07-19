import React, { useRef, useState } from 'react';
import { View, Platform } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { styles } from './style';

export default ({ link }) => {
  const videoPlayer = useRef();
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [isLoading, setIsLoading] = useState(true);

  const onSeek = (seek) => {
    videoPlayer?.current.seek(seek);
  };

  const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

  const onPaused = (newState) => {
    setPaused(!paused);
    setPlayerState(newState);
  };

  const onReplay = () => {
    videoPlayer?.current.seek(0);
    setCurrentTime(0);
    if (Platform.OS === 'android') {
      setPlayerState(PLAYER_STATES.PAUSED);
      setPaused(true);
    } else {
      setPlayerState(PLAYER_STATES.PLAYING);
      setPaused(false);
    }
  };

  const onProgress = (data) => {
    if (!isLoading) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };


  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED);
    setCurrentTime(duration);
  };
  const onBuffer =()=>{
    console.log('BUffering')
  }
  return (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri:link }}
        // source={{ uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
        style={styles.video}
        onEnd={onEnd}
        onLoad={onLoad}
        onBuffer={onBuffer}
        onLoadStart={onLoadStart}
        posterResizeMode={'cover'}
        onProgress={onProgress}
        paused={paused}
        ref={(ref) => (videoPlayer.current = ref)}
        resizeMode={'contain'}
      />
  
      <MediaControls
        isFullScreen={false}
        duration={duration}
        isLoading={isLoading}
        progress={currentTime}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        mainColor={'red'}
        playerState={playerState}
        sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
      />
    </View>
  );
};
