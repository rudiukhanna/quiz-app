import { connect } from 'react-redux';

const QuestionSection = ({ questions, currentQuestion }) => {
  const question = questions[currentQuestion];

  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {currentQuestion + 1}</span>/{questions.length}
      </div>
      <div className="question-text">{question.questionText}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    currentQuestion: state.currentQuestion
  };
};

export default connect(mapStateToProps)(QuestionSection);