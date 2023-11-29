import React from "react";
import { FooterStyles } from "../styles/Footer";
import locationIcon from "../assets/svg/location.svg";
import copyrightIcon from "../assets/svg/copyright.svg";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="wrapper">
        <div className="footer--table">
          <ul>
            <a href="">Confira Nossas Vagas </a>
            <a href="">Cotação do Dólar</a>
            <a href="">Tarifas</a>
            <a href="">Segurança</a>
            <a href="">Privacidade de Dados</a>
            <a href="">Política de Privacidade</a>
            <a href="">Canal de Ética</a>
            <a href="">Política de Segurança da Informação</a>
            <a href="">Política de Segurança da Informação para Fornecedores</a>
          </ul>
        </div>

        <div className="footer--info">
          <p>
            <span>
              <img src={copyrightIcon} width="12px" />
            </span>{" "}
            2023 Banco das Américas. CNPJ: 00.000.000/0000-00
          </p>
        </div>
        <div className="footer--address">
          <p>
            <span>
              <img src={locationIcon} width="12px" />
            </span>{" "}
            Cidade | AA - Av. Avenida, 0000 - Nome de Rua. CEP: 00000-000
          </p>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
