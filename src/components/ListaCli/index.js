import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import * as C from "./styles";
import axios from "axios";

const ListaCli = forwardRef((props, ref) => {
    const { onEdit } = props;
  const [clientes, setclientes] = useState([]);

  const fetchClientes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/clientes");
      setclientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const addCliente = (novocliente) => {
    setclientes((prevclientes) => [...prevclientes, novocliente]);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/clientes/${id}`);
      setclientes(clientes.filter((cliente) => cliente.id !== id));
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
  };

  const handleEdit = (cliente) => {
    if (onEdit) {
      onEdit(cliente); 
    } else {
      console.warn("Função onEdit não foi passada como prop");
    }
  };

  useImperativeHandle(ref, () => ({
  fetchClientes: fetchClientes,
  addCliente: addCliente,
}));

  return (
    <C.Container>
      <C.Title>Lista de Clientes</C.Title>
      <C.Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cpf</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.telefone}</td>
              <td>
                <C.IconButtonEdt onClick={() => handleEdit(cliente)}>✎</C.IconButtonEdt>
              </td>
              <td>
                <C.IconButtonExc onClick={() => handleDelete(cliente.id)}>✖</C.IconButtonExc>
              </td>
            </tr>
          ))}
        </tbody>
      </C.Table>
    </C.Container>
  );
});

export default ListaCli;