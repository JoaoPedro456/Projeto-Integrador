import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px); 
  width: 250px;
  background-color:rgb(6, 15, 65); 
  color: #fff;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  z-index: 1000; 
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 1rem; 
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  space
`;

export const SidebarItem = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  text-align: left;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  justify-content: space-between;

  &:hover {
    background-color:rgb(101, 101, 101);
  }

  &.active {
    background-color: #33334a;
  }
`;
