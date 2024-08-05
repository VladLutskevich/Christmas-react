import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AudioButton } from '../GeneralMenuStyles';
import { toggleAudio } from '../../../../redux/main/actions';
import { IState } from '../../../../common/Types';

const audioSrc = require('../../../../assets/audio/audio.mp3');

const AudioControl = function () {
  const { generalMenuOptions } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const dispatch = useDispatch();

  const audio = useMemo(() => new Audio(audioSrc), []);
  audio.loop = true;
  generalMenuOptions.isAudioOn ? audio.play() : audio.pause();
  return (
    <AudioButton onClick={() => {
      dispatch(toggleAudio('toggleAudio'));
    }}
    />
  );
};

export default AudioControl;
