import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { searchFilter } from '../../redux/main/actions';
import {
  CustomHeader, HeaderContainer, CustomNav, HeaderControls, InputSearch, DivSelected, DivSelectedSpan, NavLink, NavLogo, ActiveNavPage,
} from './HeaderStyles';
import { IState } from '../Types';

const Header = function () {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { selectedItems, filters } = useSelector((state: { mainReducer: IState }) => state.mainReducer);
  const favoriteSum = selectedItems.filter(Boolean).length;
  const pagesLinks = [{ path: '/toys', title: 'Игрушки' }, { path: '/tree', title: 'Ёлка' }];

  return (
    <CustomHeader>
      <HeaderContainer>
        <CustomNav>
          <NavLogo to="/" />
          {pagesLinks.map((page) => (pathname === page.path ? <ActiveNavPage to={page.path}>{page.title}</ActiveNavPage> : <NavLink to={page.path}>{page.title}</NavLink>))}
        </CustomNav>
        <HeaderControls>
          <InputSearch value={filters.search} onChange={(e) => dispatch(searchFilter(e.target.value))} />
          <DivSelected>
            <DivSelectedSpan>{favoriteSum}</DivSelectedSpan>
          </DivSelected>
        </HeaderControls>
      </HeaderContainer>
    </CustomHeader>
  );
};

export default Header;
