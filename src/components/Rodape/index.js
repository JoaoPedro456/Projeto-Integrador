import React from "react";
import * as S from "./styles";

const Footer = () => (
  <S.FooterWrapper>
    <S.Content>
      <S.Column>
        <S.Title>Sobre Nós</S.Title>
        <S.Link href="">Quem somos</S.Link>
        <S.Link href="">Equipe</S.Link>
      </S.Column>
      <S.Column>
        <S.Title>Ajuda</S.Title>
        <S.Link href="">Suporte</S.Link>
        <S.Link href="">Contato</S.Link>
      </S.Column>
      <S.Column>
        <S.Title>Legal</S.Title>
        <S.Link href="">Política de Privacidade</S.Link>
        <S.Link href="">Termos de Uso</S.Link>
      </S.Column>
    </S.Content>
    <S.Copy>© {new Date().getFullYear()} CAIUÁ FERRAGENS. Todos os direitos reservados.</S.Copy>
  </S.FooterWrapper>
);

export default Footer;
