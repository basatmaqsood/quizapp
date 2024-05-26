import "./Assets/Styles/App.css";
import { useState } from "react";
import Trivia from "./Assets/components/Trivia";
import { pyramid, data } from "./Assets/components/data";

function App() {
  const [questionNumber, setQuestionNumber] = useState(5);
  const [timeout, setTimeout] = useState(30);

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia data={data} setTimeout = {setTimeout} questionNumber = {questionNumber} setQuestionNumber= {setQuestionNumber} />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {pyramid.map((item) => (
            <li
              key={item.id}
              className={
                questionNumber == item.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="MoneyListItemNumber">{item.id}</span>
              <span className="MoneyListItemAmmount">{item.ammount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
