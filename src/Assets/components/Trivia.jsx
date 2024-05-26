
export default function Trivia({ data, setTimeout, questionNumber, setQuestionNumber}) {
  return (
    <div className="trivia">
        <div className="question">Question</div>
        <div className="answers">
            <div className="answer">Option 1</div>
            <div className="answer ">Option 2</div>
            <div className="answer ">Option 3</div>
            <div className="answer">Option 4</div>
        </div>
    </div>
  )
}
