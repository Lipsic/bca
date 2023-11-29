import { useState, lazy, Suspense } from "react";

import { ContentStyles } from "./styles/Content";
import Header from "./containers/Header";
import Rosto from "./containers/Rosto";
// import Features from "./containers/Features";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
// import Operations from "./containers/Operations";
// import Benefits from "./containers/Benefits";
import Footer from "./containers/Footer";
import Modal from "./containers/Modal";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const openAccountHandler = function (value) {
    setIsModalActive(value);
  };

  const Features = lazy(() => import("./containers/Features"));
  const Operations = lazy(() => import("./containers/Operations"));
  const Benefits = lazy(() => import("./containers/Benefits"));
  return (
    <>
      <ContentStyles>
        <Header openAccountHandler={openAccountHandler} />
        {isModalActive && <Modal openAccountHandler={openAccountHandler} />}
        <Rosto />
        <Suspense>
          <Features />
          <Operations />
          <Benefits />
        </Suspense>
      </ContentStyles>
      <Footer styles={{ backgroundColor: "#d3d3d3" }} />
    </>
  );
}

export default App;
