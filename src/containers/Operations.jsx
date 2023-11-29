//em vez de mexer com classes, fosse melhor só rederizar o conteúdo dinamicamente em uma única tag.
//o conteúdo iria para dentro de um objeto ou
import { useState } from "react";
import { OperationsStyles } from "../styles/Operations";
import ComponentHeader from "../styles/ComponentHeader";
import upload from "../assets/svg/upload.svg";
import home from "../assets/svg/home.svg";
import userX from "../assets/svg/user-x.svg";
const content = [
  {
    text: "1: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum accusamus eligendi libero ratione.",
    title: "Tranfser money to anyone, instantly! No fees, no BS.",
    backgroundColor: "#ffb003",
    active: true,
    svg: upload,
    id: "11111",
  },
  {
    text: "2: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum accusamus eligendi libero ratione.",
    title: "Buy a home or make your dreams come true, with instant loans.",
    backgroundColor: "#5ec576",
    active: false,
    svg: home,
    id: "222222",
  },
  {
    text: "3: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum accusamus eligendi libero ratione.",
    title: "No longer need your account? No problem! Close it instantly.",
    backgroundColor: "#ff585f",
    active: false,
    svg: userX,
    id: "333333",
  },
];
function Operations() {
  const [initialState, setInitialState] = useState(content);
  const handleClick = function (e) {
    if (e.target.tagName !== "BUTTON") return;
    const btnNumber = e.target.innerText.slice(-1);
    let operations = [...initialState];
    operations.forEach(function (el, i) {
      if (i + 1 != btnNumber) {
        return (el.active = false);
      } else {
        return (el.active = true);
      }
    });
    setInitialState(operations);
  };

  const changeHandler = function (id) {
    const btns = document.querySelectorAll("#btn-operations");
    btns.forEach((el) => {
      if (el.classList.contains(`btn-${id + 1}`)) {
        el.classList.add("operantions--btn__animation");
      } else {
        el.classList.remove("operantions--btn__animation");
      }
    });
  };

  changeHandler();
  return (
    <OperationsStyles>
      <ComponentHeader className="operations-header">
        <h2>OPERAÇÕES</h2>
        <h3>Everything as simple as possible, but no simpler.</h3>
      </ComponentHeader>
      <div className="container">
        <div className="btns" onClick={handleClick}>
          <button
            id="btn-operations"
            className="btn-1 operantions--btn__animation"
          >
            01 Instant Transfers <span className="occult">1</span>
          </button>
          <button id="btn-operations" className="btn-2">
            02 Instant Loans <span className="occult">2</span>
          </button>
          <button id="btn-operations" className="btn-3">
            03 Instant Closing <span className="occult">3</span>
          </button>
        </div>
        <div className="text">
          {initialState.map((el, i) => (
            <>
              {el.active ? (
                <div key={`svg__${i}`} className="svg-container">
                  <img
                    style={{ backgroundColor: el.backgroundColor }}
                    src={el.svg}
                    className="svg"
                  />
                </div>
              ) : (
                false
              )}

              {el.active ? (
                <div
                  onChange={changeHandler(i)}
                  key={`operations__${i}`}
                  className="text-container"
                  style={{ transition: "500ms" }}
                >
                  <h5 className="title">{el.title}</h5>
                  <p key={el.id}>{el.text}</p>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </OperationsStyles>
  );
}

export default Operations;
