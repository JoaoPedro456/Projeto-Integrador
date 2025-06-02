import React from 'react';
import * as C from './styles';
import {
  FaWarehouse,
  FaBars
} from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <C.Container>
      <C.Header>
        <C.SidebarToggle onClick={toggleSidebar}>
          <FaBars size={20} />
        </C.SidebarToggle>

        <C.Logo>
          <FaWarehouse size={32} color="#fff" />
          <C.Title>Caiuá Ferragens</C.Title>
        </C.Logo>
      </C.Header>
    </C.Container>
  );
};

export default Header;
