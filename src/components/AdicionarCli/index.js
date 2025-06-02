import React, { useState, useRef } from "react";
import * as C from "./style";
import axios from "axios";
import ListaCli from "../ListaCli";
import EditarCliente from "../EditarCliente";

const AdicionarCli = ({ onclienteAdded }) => {
  const listaRef = useRef();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(""); 

  const [clienteEditando, setClienteEditando] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
    setError("");
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
    setError("");
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
    setError("");
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
    setError("");
  };

  const handleSalvar = async () => {
    if (!nome || !cpf || !endereco || !telefone) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const parsedCpf = parseInt(cpf);
    const parsedTelefone = parseInt(telefone);

    if (isNaN(parsedCpf) || cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      setError("CPF deve ter exatamente 11 dígitos numéricos.");
      return;
    }

    if (isNaN(parsedTelefone) || telefone.length < 10 || telefone.length > 11 || !/^\d+$/.test(telefone)) {
      setError("Telefone deve ter 10 ou 11 dígitos numéricos.");
      return;
    }

    const cliente = {
      nome,
      cpf: parsedCpf,
      endereco,
      telefone: parsedTelefone,
    };

    console.log("Dados enviados para o backend:", cliente); 

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/clientes", cliente, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Resposta do backend:", response.data);
      const novocliente = response.data;
      setNome("");
      setCpf("");
      setEndereco("");
      setTelefone("");
      setError("");
      setSuccess("Cliente cadastrado com sucesso!");
      listaRef.current.fetchClientes();
      if (onclienteAdded) {
        onclienteAdded(novocliente);
      }
    } catch (error) {
      console.error("Erro ao salvar o cliente:", error);
      if (error.response) {
        const errorMessage = error.response.data?.message || JSON.stringify(error.response.data) || "Erro desconhecido no servidor.";
        setError(`Erro ${error.response.status}: ${errorMessage}`);
      } else if (error.request) {
        setError("Sem resposta do servidor. Verifique se o backend está rodando em http://localhost:8080.");
      } else {
        setError("Erro ao enviar a requisição: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

const handleEditarCliente = (cliente) => {
    setClienteEditando(cliente);
    setModalAberto(true);
  };

  const handleClienteAtualizado = () => {
    listaRef.current.fetchClientes();
    setModalAberto(false);
  };

  return (
    <C.Container>
      <C.Title>Adicionar Cliente</C.Title>
      {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
      {success && <C.SuccessMessage>{success}</C.SuccessMessage>}

      <C.FormWrapper>
        <C.FieldsWrapper>
          <C.InputGroup>
            <label htmlFor="nome">Nome do cliente:</label>
            <C.Input
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
              className="wide-input"
            />
          </C.InputGroup>
          <C.InputGroup>
            <label htmlFor="cpf">CPF:</label>
            <C.Input
              type="text"
              id="cpf"
              value={cpf}
              onChange={handleCpfChange}
              maxLength="11"
            />
          </C.InputGroup>
          <C.InputGroup>
            <label htmlFor="endereco">Endereço:</label>
            <C.Input
              type="text"
              id="endereco"
              value={endereco}
              onChange={handleEnderecoChange}
            />
          </C.InputGroup>
          <C.InputGroup>
            <label htmlFor="telefone">Telefone:</label>
            <C.Input
              type="text"
              id="telefone"
              value={telefone}
              onChange={handleTelefoneChange}
              maxLength="11"
            />
          </C.InputGroup>
        </C.FieldsWrapper>
        <C.ButtonWrapper>
          <C.Button onClick={handleSalvar} disabled={isLoading}>
            {isLoading ? "Salvando..." : "Salvar"}
          </C.Button>
        </C.ButtonWrapper>
      </C.FormWrapper>

      <ListaCli ref={listaRef} onEdit={handleEditarCliente} />

      <EditarCliente
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        cliente={clienteEditando}
        onAtualizado={handleClienteAtualizado}
      />
    </C.Container>
  );
};

export default AdicionarCli;