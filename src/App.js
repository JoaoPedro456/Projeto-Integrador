import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/header";
import Resume from "./components/Resume";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/SideBar";
import Venda from "./components/Venda";
import styled from 'styled-components';
import AdicionarProd from './components/AdicionarProd';
import AdicionarCli from './components/AdicionarCli';
import Footer from "./components/Rodape";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';        
import 'primeicons/primeicons.css';                      

function App() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

const renderContent = () => {
  switch (activeComponent) {
    case "dashboard":
      return (
        <>
          <Sidebar />
          <Resume />
          <Dashboard />
        </>
      );
    case "Produtos":
      return <AdicionarProd />;
    case "Clientes":
      return <AdicionarCli />;
    case "Venda":
      return <Venda />;
    default:
      return <div>Selecione uma opção no menu</div>;
  }
};

const ContentWrapper = styled.div`
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  padding: 1rem;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

  return (
    <>
      <GlobalStyle />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        setActiveComponent={setActiveComponent}
      />
      <ContentWrapper isOpen={sidebarOpen}>
        {renderContent()}
      </ContentWrapper>

    </>
  );
}

export default App;
