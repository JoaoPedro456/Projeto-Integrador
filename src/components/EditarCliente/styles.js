import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  button {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: #777;
    transition: color 0.2s;

    &:hover {
      color: #333;
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    font-size: 0.9rem;
    color: #555;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #005eff;
    box-shadow: 0 0 8px rgba(0, 94, 255, 0.3);
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:first-child {
    background-color: #eee;
    color: #555;

    &:hover {
      background-color: #ddd;
    }
  }

  &:last-child {
    background-color:rgb(79, 237, 0);
    color: #fff;

    &:hover {
      background-color:rgb(32, 168, 5);
      transform: translateY(-2px);
    }

    &:disabled {
      background-color: #a0a0a0;
      cursor: not-allowed;
      transform: none;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin: 0;
`;

export const SuccessMessage = styled.p`
  color: #2ecc71;
  font-size: 0.9rem;
  margin: 0;
`;
