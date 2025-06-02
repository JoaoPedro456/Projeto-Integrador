import React, { useState, useEffect } from "react";
import axios from "axios";
import * as C from "./styles";

const EditarCliente = ({ isOpen, onClose, cliente, onAtualizado }) => {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    endereco: "",
    telefone: "",
  });

  useEffect(() => {
    if (cliente) {
      setForm({
        nome: cliente.nome,
        cpf: cliente.cpf,
        endereco: cliente.endereco,
        telefone: cliente.telefone,
      });
    }
  }, [cliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/clientes/${cliente.id}`,
        {
          ...form,
          nome: form.nome,
          cpf: form.cpf,
          endereco: form.endereco,
          telefone: form.telefone,
        }
      );
      onAtualizado();
      onClose();
    } catch (err) {
      console.error("Erro ao atualizar cliente", err);
    }
  };

  if (!isOpen) return null;

  return (
    <C.ModalOverlay>
      <C.ModalContent>
        <C.ModalHeader>
          <h2>Editar Usuário</h2>
          <button onClick={onClose}>✖</button>
        </C.ModalHeader>
        <C.ModalBody>
          <C.InputGroup>
            <label>Nome</label>
            <C.Input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </C.InputGroup>
          <C.InputGroup>
            <label>CPF</label>
            <C.Input
              name="cpf"
              type="text"
              value={form.cpf}
              onChange={handleChange}
              step="0.01"
              min="0"
              required
            />
          </C.InputGroup>
          <C.InputGroup>
            <label>Enrereço</label>
            <C.Input
              name="endereco"
              type="text"
              value={form.endereco}
              onChange={handleChange}
              step="1"
              min="0"
              required
            />
          </C.InputGroup>
        <C.InputGroup>
            <label>Telefone</label>
            <C.Input
              name="telefone"
              type="text"
              value={form.telefone}
              onChange={handleChange}
              step="1"
              min="0"
              required
            />
          </C.InputGroup>
        </C.ModalBody>
        <C.ModalFooter>
          <C.Button onClick={onClose}>Cancelar</C.Button>
          <C.Button onClick={handleSubmit}>Salvar</C.Button>
        </C.ModalFooter>
      </C.ModalContent>
    </C.ModalOverlay>
  );
};

export default EditarCliente;