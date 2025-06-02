import styled from "styled-components";

export const Container = styled.div`
  max-width: 850px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-top: 7%;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const clienteWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  align-items: center;

  label {
    font-weight: 500;
    color: #555;
  }

  .p-autocomplete {
    flex: 1;
  }

  .p-autocomplete .p-inputtext {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
      border-color: #999;
    }

    &:focus {
      outline: none;
      border-color: #26FF00;
      box-shadow: 0 0 5px rgba(38, 255, 0, 0.5);
    }
  }

  .p-autocomplete-panel {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
  }

  .p-autocomplete-item {
    padding: 0.5rem;
    font-size: 1rem;
    color: #333;
    cursor: pointer;

    &:hover {
      background: #f4f4f4;
    }
  }
`;

export const ProdutoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .p-autocomplete {
    flex: 1; /* Ocupa o espaço disponível */
  }

  .p-autocomplete .p-inputtext {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
      border-color: #999;
    }

    &:focus {
      outline: none;
      border-color: #26FF00;
      box-shadow: 0 0 5px rgba(38, 255, 0, 0.5);
    }
  }

  .p-autocomplete-panel {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
  }

  .p-autocomplete-item {
    padding: 0.5rem;
    font-size: 1rem;
    color: #333;
    cursor: pointer;

    &:hover {
      background: #f4f4f4;
    }
  }
`;

export const Select = styled.select`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 80px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #26FF00;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #20cc00;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #f9f9f9;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background: #f4f4f4;
  }
`;

export const Total = styled.div`
  margin-top: 1rem;
  text-align: right;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  text-align: center;
`;

export const SuccessMessage = styled.div`
  color: #2ecc71;
  text-align: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  color: #e74c3c;
  transition: color 0.2s;

  &:hover {
    color: #c0392b;
  }
`;