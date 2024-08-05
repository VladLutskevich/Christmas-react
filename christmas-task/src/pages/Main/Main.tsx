import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  MainPage, BigBallBg, SmallBallBg, Title, TitleSpan, CustomButton,
} from './MainStyles';

const Main = function () {
  const history = useHistory();

  return (
    <MainPage>
      <BigBallBg />
      <SmallBallBg />
      <Title>
        Новогодняя игра
        <TitleSpan>«Наряди ёлку»</TitleSpan>
      </Title>
      <CustomButton onClick={() => history.push('/toys')}>Начать</CustomButton>
    </MainPage>
  );
};

export default Main;
