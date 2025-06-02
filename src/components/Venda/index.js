import React, { useState, useEffect } from "react";
import * as C from "./style";
import axios from "axios";
import { AutoComplete } from 'primereact/autocomplete';

const VendaPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [clientes, setclientes] = useState([]);
  const [itens, setItens] = useState([]);
  const [selectedcliente, setSelectedcliente] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [clienteSuggestions, setClienteSuggestions] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const [produtoSuggestions, setProdutoSuggestions] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
    axios.get("http://localhost:8080/api/clientes")
      .then(res => setclientes(res.data))
      .catch(err => console.error("Erro ao buscar clientes:", err));
  }, []);

  useEffect(() => {
    const soma = itens.reduce((acc, item) => acc + item.valorUnitario * item.quantidade, 0);
    setTotal(soma);
  }, [itens]);

const handleAddItem = () => {
  const produto = produtos.find(p => p.id === parseInt(selectedId, 10));
  if (!produto) {
    setError("Selecione um produto válido");
    return;
  }
  if (quantidade < 1 || quantidade > produto.quantidade) {
    setError("Quantidade inválida");
    return;
  }
  setError("");
  setItens(prev => [
    ...prev,
    { produtoId: produto.id, valorUnitario: produto.valor, quantidade }
  ]);
  setSelectedProduto(null);
  setSelectedId("");
  setQuantidade(1);
};

  const handleRemoveItem = (indexToRemove) => {
    setItens(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedcliente) {
      setError("Selecione um cliente");
      return;
    }
    if (itens.length === 0) {
      setError("Adicione pelo menos um item");
      return;
    }
    setError("");

    const venda = { 
      data: new Date(), 
      total, 
      clienteId: parseInt(selectedcliente, 10),
      itensVenda: itens 
    };
    try {
      const response = await axios.post("http://localhost:8080/venda", venda);
      await Promise.all(itens.map(item => {
        const p = produtos.find(p => p.id === item.produtoId);
        return axios.put(`http://localhost:8080/api/produtos/${item.produtoId}`, {
          ...p,
          quantidade: p.quantidade - item.quantidade
        });
      }));
      setSuccess("Venda realizada com sucesso!");
      setItens([]);
      setSelectedCliente(null);
      setSelectedProduto(null);
      setQuantidade(0);
    } catch (err) {
      console.error(err);
      setError("Falha ao realizar venda");
    }
  };

  return (
    <C.Container>
      <C.Title>Realizar Venda</C.Title>
      {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
      {success && <C.SuccessMessage>{success}</C.SuccessMessage>}
      <C.Form onSubmit={handleSubmit}>

        <C.clienteWrapper>
          <label>Cliente:</label>
          <AutoComplete
            value={selectedCliente}
            suggestions={clienteSuggestions} 
            completeMethod={(e) => {
              const filtered = clientes.filter((user) =>
                user.nome.toLowerCase().includes(e.query.toLowerCase()));
              setClienteSuggestions(filtered); }}
            field="nome"
            onChange={(e) => {
              setSelectedCliente(e.value);
              setSelectedcliente(e.value ? e.value.id : "");
            }}
            forceSelection={true}
            placeholder="Digite para buscar cliente"
          />
        </C.clienteWrapper>

        <C.ProdutoWrapper>
            <label>Produto:</label>
          <AutoComplete
            value={selectedProduto}
            suggestions={produtoSuggestions}
            completeMethod={(e) => {
              const filtered = produtos.filter((prod) =>
              prod.nome.toLowerCase().includes(e.query.toLowerCase()));
              setProdutoSuggestions(filtered);}}
            field="nome"
            itemTemplate={(item) => `${item.nome} / (Estoque: ${item.quantidade})`}
            onChange={(e) => {
              setSelectedProduto(e.value);
              setSelectedId(e.value ? e.value.id : "");
            }}
            forceSelection={true}
            placeholder="Digite para buscar produto"
          />
          <C.Input
            type="number"
            min="1"
            value={quantidade}
            onChange={e => setQuantidade(parseInt(e.target.value, 10))}
          />
          <C.Button type="button" onClick={handleAddItem}>
            Adicionar Item
          </C.Button>
        </C.ProdutoWrapper>

        <C.Table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Unitário</th>
              <th>Qtd</th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item, i) => {
              const prod = produtos.find(p => p.id === item.produtoId);
              return (
                <tr key={i}>
                  <td>{prod?.nome}</td>
                  <td>{item.valorUnitario.toFixed(2)}</td>
                  <td>{item.quantidade}</td>
                  <td>
                    <C.IconButton onClick={() => handleRemoveItem(i)}>
                      🗑
                    </C.IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </C.Table>

        <C.Total>Total: R$ {total.toFixed(2)}</C.Total>
        <C.Button type="submit">Finalizar Venda</C.Button>
      </C.Form>
    </C.Container>
  );
};

export default VendaPage;
