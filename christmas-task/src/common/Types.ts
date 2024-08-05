interface Toy {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
}

interface TreeCard{
  top: number;
  left: number;
  id: string;
}

interface IState{
  filters: {
    shape: {
      ball: boolean,
      bell: boolean,
      cone: boolean,
      snowflake: boolean,
      toy: boolean,
    },
    colors: {
      white: boolean,
      yellow: boolean,
      red: boolean,
      blue: boolean,
      green: boolean,
    },
    size: {
      big: boolean,
      normal: boolean,
      small: boolean,
    },
    isFavorite: boolean,
    amount: {
      min: number,
      max: number,
    },
    year: {
      min: number,
      max: number,
    },
    sortOptionSelected: string,
    search: string,
  },
  isExtraToysPopupActive: boolean,
  selectedItems: boolean[],
  generalMenuOptions: {
    isAudioOn: boolean,
    isSnowOn: boolean,
    treeOptionSelected: string,
    bgOptionSelected: string,
    isGarlandOn: boolean,
    garlandOptionSelected: string,
  },
  itemsForDrag: number[],
  draggedItems: number[],
  toysOnTree: TreeCard[],
}

export type { Toy, TreeCard, IState };
