import { useContext } from "react";
import { QuizContext } from '../App';

export function QuestionSection() {
    const { questions, currentQuestion } = useContext(QuizContext);

    return (
     <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
      </div>
      );
}
