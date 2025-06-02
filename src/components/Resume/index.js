import React from "react";
import * as S from "./styles";

const cardsData = [
  { title: "Valor em estoque", value: "R$****" },
  { title: "Vendas", value: "R$****" },
  { title: "Lucro", value: "R$****" },
];

const ResumeItem = ({ title, value }) => {
  return (
    <S.Card>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.Header>
      <S.Total>{value}</S.Total>
    </S.Card>
  );
};

const ResumeCards = () => {
  return (
    <S.Container>
      {cardsData.map((card, index) => (
        <ResumeItem
          key={index}
          title={card.title}
          value={card.value}
        />
      ))}
    </S.Container>
  );
};

export default ResumeCards;