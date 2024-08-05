import React, { DragEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeDraggedItems, changeItemsForDrag, changeToysOnTree, resetLocalstorage,
} from '../../../redux/main/actions';
import { toysData } from '../../../common/ToysData';
import { IState } from '../../../common/Types';
import {
  CardForDrag, CardForDragCount, CardForDragImg, ItemsForDragContainer, ToysMenuContainer, TreeResetButton,
} from './ToysMenuStyles';

const ToysMenu = function () {
  const dispatch = useDispatch();
  const {
    selectedItems, itemsForDrag, draggedItems, toysOnTree,
  } = useSelector((state: { mainReducer: IState }) => state.mainReducer);

  function dragStartHandler(ev: DragEvent) {
    const tmpTarget = ev.target as HTMLElement;
    ev.dataTransfer?.setData('imageId', tmpTarget.id);
    ev.dataTransfer?.setData('parentId', tmpTarget?.parentElement?.id || '');
    ev.dataTransfer.dropEffect = 'copy';
  }

  function dragOverHandlerMenu(ev: DragEvent) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  function dropHandlerMenu(ev: DragEvent) {
    ev.stopPropagation();
    ev.preventDefault();
    const imgId = ev.dataTransfer.getData('imageId');
    const parentId = ev.dataTransfer.getData('parentId');

    if (parentId === 'tree') {
      const draggedItemsCopy = [...draggedItems];
      draggedItemsCopy[Number(imgId.split('-')[0])] = draggedItems[Number(imgId.split('-')[0])] - 1;
      dispatch(changeDraggedItems(draggedItemsCopy));

      let toysOnTreeCopy = [...toysOnTree];
      toysOnTreeCopy = toysOnTreeCopy.filter((toy) => toy.id !== imgId);
      dispatch(changeToysOnTree(toysOnTreeCopy));
    }
  }

  const countSelected = selectedItems.filter(Boolean).length;
  const selectedItemsCount = [2, 5, 3, 2, 4, 6, 12, 10, 2, 7, 11, 5, 3, 4, 3, 3, 7, 2, 12, 8].concat(new Array<number>(40).fill(0));
  if (countSelected) {
    selectedItems.map((elem, i) => {
      if (elem) {
        selectedItemsCount[i] = Number(toysData[i].count);
      } else {
        selectedItemsCount[i] = 0;
      }
    });
  }
  if (JSON.stringify(itemsForDrag) !== JSON.stringify(selectedItemsCount)) {
    dispatch(changeItemsForDrag(selectedItemsCount));
  }

  return (
    <ToysMenuContainer>
      <ItemsForDragContainer onDragOver={dragOverHandlerMenu} onDrop={dropHandlerMenu}>
        {itemsForDrag.map((item, i) => {
          if (item - draggedItems[i] > 0) {
            return (
              <CardForDrag id={`${i}`}>
                <CardForDragCount>{item - draggedItems[i]}</CardForDragCount>
                {Array(item - draggedItems[i]).fill(`${process.env.PUBLIC_URL}/assets/toys/${i + 1}.png`).map((source, j) => <CardForDragImg src={source} draggable="true" onDragStart={dragStartHandler} id={`${i}-${j}`} />)}
              </CardForDrag>
            );
          }
        })}
      </ItemsForDragContainer>
      <TreeResetButton onClick={() => dispatch(resetLocalstorage('resetLocalstorage'))}>Сброс Localstorage</TreeResetButton>
    </ToysMenuContainer>
  );
};

export default ToysMenu;
