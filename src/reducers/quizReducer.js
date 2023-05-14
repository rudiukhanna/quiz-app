const initialState = {
    questions: [
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
    ],
    currentQuestion: 0,
    showScore: false,
    score: 0
  };

  const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'HANDLE_ANSWER_OPTION_CLICK':
        const isCorrect = action.payload.isCorrect;
        const score = isCorrect ? state.score + 1 : state.score;
        const nextQuestion = state.currentQuestion + 1;
        const showScore = nextQuestion >= state.questions.length;
  
        return {
          ...state,
          score,
          currentQuestion: showScore ? state.currentQuestion : nextQuestion,
          showScore
        };
  
      case 'RESET_QUIZ':
        return {
          ...state,
          currentQuestion: 0,
          showScore: false,
          score: 0
        };
  
      default:
        return state;
    }
  };
  
  export default quizReducer;