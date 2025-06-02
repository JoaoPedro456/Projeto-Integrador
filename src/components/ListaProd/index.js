import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import * as C from "./styles";
import axios from "axios";

const ListaProd = forwardRef((props, ref) => {
  const { onEdit, onDeleteExternal } = props;
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const addProduto = (novoProduto) => {
    setProdutos(prev => [...prev, novoProduto]);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/produtos/${id}`);
      setProdutos(prev => prev.filter(p => p.id !== id));
      if (onDeleteExternal) onDeleteExternal();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  const handleEdit = (produto) => {
    if (onEdit) {
      onEdit(produto); 
    } else {
      console.warn("Função onEdit não foi passada como prop");
    }
  };

  useImperativeHandle(ref, () => ({
    fetchProdutos,
    addProduto,
  }));

  return (
    <C.Container>
      <C.Title>Lista de Produtos</C.Title>
      <C.Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.valor.toFixed(2)}</td>
              <td>{produto.quantidade}</td>
              <td>
                <C.IconButtonEdt onClick={() => handleEdit(produto)}>✎</C.IconButtonEdt>
              </td>
              <td>
                <C.IconButtonExc delete onClick={() => handleDelete(produto.id)}>✖</C.IconButtonExc>
              </td>
            </tr>
          ))}
        </tbody>
      </C.Table>
    </C.Container>
  );
});

export default ListaProd;