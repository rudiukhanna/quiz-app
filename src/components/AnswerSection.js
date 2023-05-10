import { useContext } from "react";
import { QuizContext }   from '../App';

export function AnswerSection() {
    const { questions, currentQuestion, handleAnswerOptionClick } = useContext(QuizContext);


    return (
		<div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
				<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
					{answerOption.answerText}
				</button>
			))}
    </div>
    );
}