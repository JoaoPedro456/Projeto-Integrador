import styled from 'styled-components'; 

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,rgb(13, 0, 255) 0%,rgb(48, 48, 48) 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  position: fixed;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const SidebarToggle = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  transition: background 0.2s ease;
  margin-left: -10%;
  margin-right: 10%;
  color: rgb(255, 255, 255);

  order: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.38);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  order: 1;
`;

export const Title = styled.h1`
  margin: 0;
  margin-left: 15px;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  order: 2;
`;