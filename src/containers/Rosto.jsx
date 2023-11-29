import React from "react";
import { RostoStyles } from "../styles/Rosto";
import creditCardIcon from "../assets/svg/credit-card-01.svg";
import moneySendIcon from "../assets/svg/money-send.svg";
import worldAltIcon from "../assets/svg/world-alt.svg";
import giftIcon from "../assets/svg/gift.svg";
import happyGirl from "../assets/happy-girl.png";
function Rosto() {
  return (
    <RostoStyles>
      <div>
        <h1>
          Conversão em real
          <br />
          <span>grátis</span>
        </h1>
        <div>
          <div className="rosto--text">
            <span className="rosto--icon">
              <img src={creditCardIcon} />
            </span>
            <p>Compras no cartão débito sem IOF</p>
          </div>
          <div className="rosto--text">
            <span className="rosto--icon">
              <img src={moneySendIcon} />
            </span>
            <p> Câmbio com cotação comercial, melhor do que a turismo</p>
          </div>
          <div className="rosto--text">
            <span className="rosto--icon">
              <img src={worldAltIcon} />
            </span>
            <p> Transferências para outras contas nos EUA</p>
          </div>
          <div className="rosto--text">
            <span className="rosto--icon">
              <img src={giftIcon} />
            </span>
            <p> Gift Card das melhores marcas internacionais</p>
          </div>
        </div>
        <button>Abrir Conta Transnacional</button>
      </div>
      <div className="img">
        <img src={happyGirl} />
      </div>
    </RostoStyles>
  );
}

export default Rosto;
