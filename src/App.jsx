import "./Assets/Styles/App.css";
import { useEffect, useState } from "react";
import Trivia from "./Assets/components/Trivia";
import { pyramid, data } from "./Assets/components/data";
import Timer from "./Assets/components/Timer";


function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  useEffect(() => {
    setEarned(pyramid.find((m) => m.id === questionNumber - 1)?.ammount);
  },[questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? 
        <div className="endText">
          <h1>Game Over!</h1>
          <h1>You earned: {earned}</h1> 
        </div>: (
          <>
        <div className="top">
          <div className="timer"><Timer setStop = {setStop} questionNumber = {questionNumber}/></div>
        </div>
        <div className="bottom">
          <Trivia data={data} setStop = {setStop} questionNumber = {questionNumber} setQuestionNumber= {setQuestionNumber} />
        </div>
        </>
        )}
        </div>
      <div className="pyramid">
        <ul className="moneyList">
          {pyramid.map((item) => (
            <li
              key={item.id}
              className={
                questionNumber === item.id
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
