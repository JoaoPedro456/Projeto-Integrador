import React, { useState, useRef } from "react";
import * as C from "./styles";
import axios from "axios";
import ListaProd from "../ListaProd";
import EditarProduto from "../EditarProduto";

const AdicionarProd = ({ onProdutoAdded }) => {
  const listaRef = useRef();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(""); 

  const [produtoEditando, setProdutoEditando] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
    setError("");
    setSuccess("");
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
    setError("");
    setSuccess("");
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
    setError("");
    setSuccess("");
  };

  const handleSalvar = async () => {
    if (!nome || !valor || !quantidade) {
      setError("Todos os campos são obrigatórios.");
      listaRef.current.fetchProdutos();
      return;
    }

    const parsedValor = parseFloat(valor);
    const parsedQuantidade = parseInt(quantidade);

    if (isNaN(parsedValor) || parsedValor <= 0) {
      setError("O valor deve ser um número positivo.");
      return;
    }

    if (isNaN(parsedQuantidade) || parsedQuantidade < 0) {
      setError("A quantidade deve ser um número inteiro não negativo.");
      return;
    }

    const produto = {
      nome,
      valor: parsedValor,
      quantidade: parsedQuantidade,
    };

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/produtos", produto);
      const novoProduto = response.data;
      setNome("");
      setValor("");
      setQuantidade("");
      setError("");
      setSuccess("Produto cadastrado com sucesso!");
      if (onProdutoAdded) {
        onProdutoAdded(novoProduto);
      }
      listaRef.current.fetchProdutos();
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
      setError("Erro ao salvar o produto. Verifique o backend.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditarProduto = (produto) => {
    setProdutoEditando(produto);
    setModalAberto(true);
  };

  const handleProdutoAtualizado = () => {
    listaRef.current.fetchProdutos();
    setModalAberto(false);
  };

  return (
    <C.Container>
      <C.Title>Adicionar Produto</C.Title>
      {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
      {success && <C.SuccessMessage>{success}</C.SuccessMessage>}

      <C.FormWrapper>
        <C.FieldsWrapper>
          <C.InputGroup>
            <label htmlFor="nome">Nome do produto:</label>
            <C.Input
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
              className="wide-input"
            />
          </C.InputGroup>
          <C.InputGroup>
            <label htmlFor="valor">Valor do produto:</label>
            <C.Input
              type="number"
              id="valor"
              value={valor}
              onChange={handleValorChange}
              step="0.01"
              min="0"
            />
          </C.InputGroup>
          <C.InputGroup>
            <label htmlFor="quantidade">Quantidade:</label>
            <C.Input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={handleQuantidadeChange}
              min="0"
              step="1"
            />
          </C.InputGroup>
        </C.FieldsWrapper>
        <C.ButtonWrapper>
          <C.Button onClick={handleSalvar} disabled={isLoading}>
            {isLoading ? "Salvando..." : "Salvar"}
          </C.Button>
        </C.ButtonWrapper>
      </C.FormWrapper>

      <ListaProd ref={listaRef} onEdit={handleEditarProduto} />

      <EditarProduto
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        produto={produtoEditando}
        onAtualizado={handleProdutoAtualizado}
      />
    </C.Container>
    
  );
};

export default AdicionarProd;
