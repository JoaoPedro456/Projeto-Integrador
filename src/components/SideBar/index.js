  import React from 'react';
  import * as C from './styles';

  const Sidebar = ({ isOpen, toggleSidebar, setActiveComponent }) => {
    return (
      <C.SidebarContainer isOpen={isOpen}>
        <C.SidebarContent>
          <C.SidebarItem onClick={() => { setActiveComponent("dashboard"); toggleSidebar(); }}>
            Home
          </C.SidebarItem>
          <C.SidebarItem onClick={() => { setActiveComponent("Produtos"); toggleSidebar(); }}>
            Produtos
          </C.SidebarItem>
          <C.SidebarItem onClick={() => { setActiveComponent("Clientes"); toggleSidebar(); }}>
            Clientes
          </C.SidebarItem>
          <C.SidebarItem onClick={() => { setActiveComponent("Venda"); toggleSidebar(); }}>
            Venda
          </C.SidebarItem>
        </C.SidebarContent>
      </C.SidebarContainer>
    );
  };

  export default Sidebar;
