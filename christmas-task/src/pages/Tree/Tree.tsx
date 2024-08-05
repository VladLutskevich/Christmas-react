import React from 'react';

import { CustomPage, Blur } from '../../common/custom-styled-components/CustomPage';
import GeneralMenu from './GeneralMenu/GeneralMenu';
import ToysMenu from './ToysMenu/ToysMenu';
import TreeArea from './TreeArea/TreeArea';
import { PageContainer } from './TreeStyles';

const Tree = function () {
  return (
    <CustomPage>
      <Blur>
        <PageContainer>
          <GeneralMenu />
          <TreeArea />
          <ToysMenu />
        </PageContainer>
      </Blur>
    </CustomPage>

  );
};

export default Tree;
