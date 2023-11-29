// Criar os links dinâmicamente com seus valores
import { useState } from "react";
import { HeaderStyles, ContainerStyles, TableLinks } from "../styles/Header";
import logo from "../assets/15605025411094493.svg";

const links = ["Serviços", "Operações", "Testumunhos", "Abra sua conta"];
const Header = function ({ openAccountHandler }) {
  const [link, setLink] = useState(links);
  const mouseIn = function (e) {
    const parent = e.target.closest("ul").children;
    for (const el of parent) {
      el.classList.add("fadding-in");
    }
  };
  const mouseOut = function (e) {
    const parent = e.target.closest("ul").children;
    for (const el of parent) {
      el.classList.remove("fadding-in");
    }
  };

  const clickHandler = function (e) {
    if (e.target.text === "Abra sua conta") {
      openAccountHandler(true);
    }
  };

  return (
    <>
      <HeaderStyles>
        <ContainerStyles>
          <div className="logo">
            <h4>
              <span>
                <img width="30px" src={logo} alt="" />
              </span>{" "}
              Banco das Américas
            </h4>
          </div>
          <TableLinks>
            <ul onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
              {link.map((link, i) => {
                return (
                  <a
                    className={`link--${i}`}
                    key={`link--${i}`}
                    onClick={clickHandler}
                  >
                    {link}
                  </a>
                );
              })}
            </ul>
          </TableLinks>
        </ContainerStyles>
      </HeaderStyles>
    </>
  );
};

export default Header;
