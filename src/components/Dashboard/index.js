import React from 'react';
import styled from 'styled-components';
import ListaProd from '../ListaProd';
import ListaUsu from '../ListaCli';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px; 
  padding: 20px;
  max-width: 1200px; 
  margin: 0 auto;
`;

const TableWrapper = styled.div`
  flex: 1;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TableWrapper>
      </TableWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;