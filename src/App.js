import { useState, createContext } from 'react';
import './App.css';
import { QuestionSection } from '../src/components/QuestionSection';
import { AnswerSection } from './components/AnswerSection';
export { App, QuizContext };


const QuizContext = createContext();

export default function App() {
  const questions = [
		{
			questionText: 'What was the Turkish city of Istanbul called before 1930?',
			answerOptions: [
				{ answerText: 'Ankara', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Constantinople', isCorrect: true },
				{ answerText: 'Sofia', isCorrect: false },
			],
		},
		{
			questionText: 'What sport did David Beckham play?',
			answerOptions: [
				{ answerText: 'Baseball', isCorrect: false },
				{ answerText: 'Football', isCorrect: true },
				{ answerText: 'Basketball', isCorrect: false },
				{ answerText: 'American Football', isCorrect: false },
			],
		},
		{
			questionText: 'Which country in the world is believed to have the most miles of motorway?',
			answerOptions: [
				{ answerText: 'China', isCorrect: true },
				{ answerText: 'USA', isCorrect: false },
				{ answerText: 'Ukraine', isCorrect: false },
				{ answerText: 'France', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'In what year did The Beatles split up?',
			answerOptions: [
				{ answerText: '1963', isCorrect: false },
				{ answerText: '1968', isCorrect: false },
				{ answerText: '1972', isCorrect: false },
				{ answerText: '1970', isCorrect: true },
			],
		},
		{
			questionText: 'Which colour pill does Neo swallow in The Matrix?',
			answerOptions: [
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Red', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital city of Australia?',
			answerOptions: [
				{ answerText: 'Perth', isCorrect: false },
				{ answerText: 'Sydney', isCorrect: false },
				{ answerText: 'Melbourne', isCorrect: false },
				{ answerText: 'Canberra', isCorrect: true },
			],
		},
		{
			questionText: 'What language is spoken in Brazil?',
			answerOptions: [
				{ answerText: 'Spanish', isCorrect: false },
				{ answerText: 'French', isCorrect: false },
				{ answerText: 'Brazilian', isCorrect: false },
				{ answerText: 'Portuguese', isCorrect: true },
			],
		},
		{
			questionText: 'How many days are there in July?',
			answerOptions: [
				{ answerText: '30', isCorrect: false },
				{ answerText: '29', isCorrect: false },
				{ answerText: '28', isCorrect: false },
				{ answerText: '31', isCorrect: true },
			],
		},
		{
			questionText: 'Who is next in line to the British throne after King Charles III?',
			answerOptions: [
				{ answerText: 'Princess Anne', isCorrect: false },
				{ answerText: 'Prince Andrew', isCorrect: false },
				{ answerText: 'Prince Edward', isCorrect: false },
				{ answerText: 'Prince William', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
		<QuizContext.Provider value={{ questions, currentQuestion, score, handleAnswerOptionClick, showScore }}>
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
						<div className='button-score'>
						 <button onClick={resetQuiz}>Play Again</button>
						 </div>
					</div>
				) : (
					<>
						<QuestionSection />
						<AnswerSection />
					</>
				)}
			</div>
		</QuizContext.Provider>
	);

}
