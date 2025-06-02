import React, { useState, useEffect } from "react";
import axios from "axios";
import * as C from "./styles";

const EditarProduto = ({ isOpen, onClose, produto, onAtualizado }) => {
  const [form, setForm] = useState({
    nome: "",
    valor: "",
    quantidade: "",
  });

  useEffect(() => {
    if (produto) {
      setForm({
        nome: produto.nome,
        valor: produto.valor,
        quantidade: produto.quantidade,
      });
    }
  }, [produto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/produtos/${produto.id}`,
        {
          ...form,
          valor: parseFloat(form.valor),
          quantidade: parseInt(form.quantidade, 10),
        }
      );
      onAtualizado();
      onClose();
    } catch (err) {
      console.error("Erro ao atualizar produto", err);
    }
  };

  if (!isOpen) return null;

  return (
    <C.ModalOverlay>
      <C.ModalContent>
        <C.ModalHeader>
          <h2>Editar Produto</h2>
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
            <label>Valor</label>
            <C.Input
              name="valor"
              type="number"
              value={form.valor}
              onChange={handleChange}
              step="0.01"
              min="0"
              required
            />
          </C.InputGroup>
          <C.InputGroup>
            <label>Quantidade</label>
            <C.Input
              name="quantidade"
              type="number"
              value={form.quantidade}
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

export default EditarProduto;