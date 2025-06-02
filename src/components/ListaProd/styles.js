import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff; 
  padding: 30px;
  border-radius: 15px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
  border: none; 
  margin-top: 2%;
  width: 100%;
  height: 81%; 
`;

export const Title = styled.h2`
  font-size: 24px; 
  font-weight: bold; 
  color: #333; 
  margin-bottom: 25px; 
  text-align: center; 
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #ffffff; 
  border-radius: 10px; 
  overflow: hidden; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); 

  th, td {
    padding: 12px;
    text-align: left;
  }

  th {
    background-color:rgb(216, 220, 255);
    font-weight: bold;
    color: #333; 
  }

  td {
    color: #555; 
    border-bottom: 1px solid #eee;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1; 
    transition: background-color 0.2s; 
  }
`;

export const IconButtonExc = styled.button`
  background: none;
  border: none;
  color:rgb(132, 0, 0); 
  font-size: 18px;
  cursor: pointer;
  padding: 8px; 
  border-radius: 5px; 
  transition: background-color 0.2s, color 0.2s; 

  &:hover {
    background-color: rgba(255, 255, 255, 0); 
    color:rgb(255, 25, 0);
  }
`;

export const IconButtonEdt = styled.button`
  background: none;
  border: none;
  color:rgb(0, 0, 0); 
  font-size: 18px;
  cursor: pointer;
  padding: 8px; 
  border-radius: 5px; 
  transition: background-color 0.2s, color 0.2s; 

  &:hover {
    background-color: rgba(255, 255, 255, 0); 
    color:rgb(156, 255, 43);
  }
`;