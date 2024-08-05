import React, { DragEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainTree, TreeContainer } from './TreeAreaStyles';
import './TreeAreaCss.css';
import snow from '../../../assets/snow/snow3.png';
import Garland from './Garland/Garland';
import { changeDraggedItems, changeToysOnTree } from '../../../redux/main/actions';
import { CardForDragImg } from '../ToysMenu/ToysMenuStyles';
import { IState } from '../../../common/Types';

const TreeArea = function () {
  const { generalMenuOptions, draggedItems, toysOnTree } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const dispatch = useDispatch();

  const snowActive = generalMenuOptions.isSnowOn ? 'snow' : '';

  function dragStartHandlerTree(ev: DragEvent) {
    const tmpTarget = ev.target as HTMLElement;
    ev.dataTransfer?.setData('imageId', tmpTarget.id);
    ev.dataTransfer?.setData('parentId', tmpTarget?.parentElement?.id || '');
    ev.dataTransfer.dropEffect = 'copy';
  }

  function dragOverHandlerTree(ev: DragEvent) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  function dropHandlerTree(ev: DragEvent) {
    ev.stopPropagation();
    ev.preventDefault();
    const imgId = ev.dataTransfer.getData('imageId');
    const parentId = ev.dataTransfer.getData('parentId');
    if (parentId !== 'tree') {
      const draggedItemsCopy = [...draggedItems];
      draggedItemsCopy[Number(imgId.split('-')[0])] = draggedItems[Number(imgId.split('-')[0])] + 1;

      const toysOnTreeCopy = [...toysOnTree];
      toysOnTreeCopy.push({ top: ev.clientY, left: ev.clientX, id: imgId });

      dispatch(changeDraggedItems(draggedItemsCopy));
      dispatch(changeToysOnTree(toysOnTreeCopy));
    } else {
      let toysOnTreeCopy = [...toysOnTree];
      toysOnTreeCopy = toysOnTreeCopy.filter((toy) => toy.id !== imgId);
      toysOnTreeCopy.push({ top: ev.clientY, left: ev.clientX, id: imgId });
      dispatch(changeToysOnTree(toysOnTreeCopy));
    }
  }

  return (
    <TreeContainer style={{ backgroundImage: `url(${process.env.PUBLIC_URL}assets/bg/${generalMenuOptions.bgOptionSelected}.jpg)` }} id="tree">
      <div className={snowActive} style={{ backgroundImage: `url(${snow})` }} />
      <MainTree src={`${process.env.PUBLIC_URL}/assets/tree/${generalMenuOptions.treeOptionSelected}.png`} draggable="false" onDragOver={dragOverHandlerTree} onDrop={dropHandlerTree} />
      <Garland />
      {toysOnTree.map((toy) => <CardForDragImg style={{ position: 'fixed', top: `${toy.top - 100}px`, left: `${toy.left - 30}px` }} id={toy.id} src={`${process.env.PUBLIC_URL}assets/toys/${Number(toy.id.split('-')[0]) + 1}.png`} draggable="true" onDragStart={dragStartHandlerTree} />)}
    </TreeContainer>
  );
};

export default TreeArea;
