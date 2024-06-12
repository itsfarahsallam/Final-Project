import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "With several varieties weighing less than a coin, what bird is the smallest in the world?",
    options: ["Finch", "Sparrow", "Hummingbird", "Chickadee"],
    answer: "Hummingbird"
  },
  {
    question: "Which flightless bird has been known to kill humans?",
    options: ["Cassowary", "Dodo", "Kiwi", "Penguin"],
    answer: "Cassowary"
  },
  {
    question: "Roughly the size of a chicken, which bird lays the largest egg relative to its size?",
    options: ["Kiwi", "Ostrich", "Albatross", "Oriole"],
    answer: "Kiwi"
  },
  {
    question: "What bird was used by ancient Egyptians for the hieroglyphic for “red”?",
    options: ["Osprey", "Peacock", "Flamingo", "Cardinal"],
    answer: "Flamingo"
  },
  {
    question: "Which bird has stomach acid more potent than the acid found in car batteries?",
    options: ["Bald Eagle", "Turkey Vulture", "Emu", "Green Heron"],
    answer: "Turkey Vulture"
  },
  {
    question: "Which bird has the largest wingspan of any living bird?",
    options: ["Albatross", "Eagle", "Condor", "Pelican"],
    answer: "Albatross"
  },
  {
    question: "What bird is known for its elaborate courtship dance?",
    options: ["Peacock", "Bird of Paradise", "Flamingo", "Swan"],
    answer: "Bird of Paradise"
  },
  {
    question: "Which bird is capable of mimicking human speech?",
    options: ["Parrot", "Raven", "Owl", "Magpie"],
    answer: "Parrot"
  },
  {
    question: "Which bird migrates the longest distance annually?",
    options: ["Arctic Tern", "Swallow", "Stork", "Sandpiper"],
    answer: "Arctic Tern"
  },
  {
    question: "What is the fastest bird in the world, capable of reaching speeds over 200 mph?",
    options: ["Peregrine Falcon", "Golden Eagle", "Swift", "Harpy Eagle"],
    answer: "Peregrine Falcon"
  },
  {
    question: "Which bird is often associated with delivering babies in folklore?",
    options: ["Stork", "Owl", "Robin", "Dove"],
    answer: "Stork"
  },
  {
    question: "Which bird is known as the state bird of three U.S. states: Kentucky, Indiana, and North Carolina?",
    options: ["Cardinal", "Blue Jay", "Robin", "Goldfinch"],
    answer: "Cardinal"
  },
  {
    question: "Which bird is the national emblem of the United States?",
    options: ["Bald Eagle", "Golden Eagle", "Hawk", "Falcon"],
    answer: "Bald Eagle"
  },
  {
    question: "Which bird is known for its distinctive laughing call?",
    options: ["Kookaburra", "Kingfisher", "Woodpecker", "Mockingbird"],
    answer: "Kookaburra"
  },
  {
    question: "Which bird is the smallest species of penguin?",
    options: ["Little Blue Penguin", "Emperor Penguin", "King Penguin", "Chinstrap Penguin"],
    answer: "Little Blue Penguin"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    setUserAnswers([...userAnswers, option]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div>
      <div className="wrapper">
        <div className="title">Bird Trivia Quiz</div>
        <div className="content">
          {showScore ? (
            <div>
              <h2>Your Score: {calculateScore()} / {quizQuestions.length}</h2>
              <h4>Thanks for playing! Refresh to try again.</h4>
            </div>
          ) : (
            <div>
              <h2>{quizQuestions[currentQuestion].question}</h2>
              <div>
                {quizQuestions[currentQuestion].options.map((option) => (
                  <button 
                    key={option} 
                    onClick={() => handleAnswerOptionClick(option)}
                    className="quiz-button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
