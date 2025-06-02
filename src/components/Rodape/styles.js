import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f8f9fa;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  text-align: center;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto 1rem;
  gap: 2rem;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 160px;
`;

export const Title = styled.h4`
  font-size: 1.1rem;
  color: #343a40;
  margin-bottom: 0.75rem;
`;

export const Link = styled.a`
  display: block;
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #343a40;
  }
`;

export const Copy = styled.p`
  font-size: 0.85rem;
  color: #6c757d;
  margin: 0;
`;
