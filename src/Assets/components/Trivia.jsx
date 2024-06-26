import { useEffect, useState } from "react";
import usesound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  function delay(duration, callBack) {
    setTimeout(() => {
      callBack();
    }, duration);
  }

  function handleClick(answer) {
    setSelectedAnswer(answer);
    setClassName("answer active");
    delay(1000, () => setClassName(answer.correct ? "answer correct" : "answer incorrect"));
    delay(3000, () => {
      if (answer.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}
