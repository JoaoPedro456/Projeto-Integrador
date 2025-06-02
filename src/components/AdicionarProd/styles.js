import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 850px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  margin-top: 7%;
  display: flex;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 1rem auto;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FieldsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 700%;
  margin-left: 35%;

  label {
    font-weight: 500;
    color: #555;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15rem;

`;

export const Button = styled.button`
  padding: 12px 30px;
  background-color: #26FF00;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #20cc00;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    background-color: #1aaa00;
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
`;

export const SuccessMessage = styled.div`
  color: #2ecc71;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
`;
