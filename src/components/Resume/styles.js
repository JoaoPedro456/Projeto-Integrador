import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2%;
  margin-top: 7%;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.71);
  text-align: center;
  width: 30%;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  margin: 20px auto;

  svg {
    font-size: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 25px;
`;

export const Total = styled.span`
  font-size: 35px;
  font-weight: bold;
  margin-left: 50%;
`;

export const IconWrapper = styled.div`
  svg {
    font-size: 24px;
    transition: all 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;