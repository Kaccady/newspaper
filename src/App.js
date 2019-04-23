import React from "react";
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";

const Column = props => (
  <div className="column">
    <h3>Заголовок</h3>
    <p>
      текст текст текст текст текст текст текст текст текст текст текст текст
      текст текст текст текст текст текст текст текст текст текст текст текст
      текст текст текст текст текст текст текст текст
    </p>
    <img className="img" src={props.img} />
  </div>
);
function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Газета</h1>
      </div>
      <div className="main">
        <Column img={pic1} />
        <Column />
        <Column img={pic2} />
        <Column />
        <Column />
        <Column />
        <Column /> 
        <Column /> 
        <Column />
        <Column img={pic2} />
        <Column img={pic1} />
        <Column />
        <Column />

      </div>
      <div className="footer">
        <h3>Газета, Газета</h3>
      </div>
    </div>
  );
}

export default App;
