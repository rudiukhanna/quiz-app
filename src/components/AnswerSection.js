import { connect } from 'react-redux';
import { handleAnswerOptionClick } from '../actions/quizActions';

const AnswerSection = ({ questions, currentQuestion, handleAnswerOptionClick }) => {
  const question = questions[currentQuestion];

  return (
    <div className="answer-section">
      {question.answerOptions.map((answerOption, index) => (
        <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
          {answerOption.answerText}
        </button>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    currentQuestion: state.currentQuestion
  };
};

const mapDispatchToProps = {
  handleAnswerOptionClick
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerSection);