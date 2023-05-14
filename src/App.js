import { connect } from 'react-redux';
import { resetQuiz } from './actions/quizActions';
import AnswerSection from './components/AnswerSection';
import QuestionSection from './components/QuestionSection';
import './App.css';

const App = ({ showScore, score, questions, resetQuiz }) => {
  const resetQuizHandler = () => {
    resetQuiz();
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <div className="button-score">
            <button onClick={resetQuizHandler}>Play Again</button>
          </div>
        </div>
      ) : (
        <>
          <QuestionSection />
          <AnswerSection />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showScore: state.showScore,
    score: state.score,
    questions: state.questions,
  };
};

const mapDispatchToProps = {
  resetQuiz
};

export default connect(mapStateToProps, mapDispatchToProps)(App);