import { useCoffeeQuiz } from '../context/coffeequiz.context';

function RoastQuestion() {
  const { handleAnswer } = useCoffeeQuiz();

  return (
    <div>
      <h3>Which type of roast do you typically buy?</h3>
      <button onClick={() => handleAnswer('roast', 'light roast')}>
        Light Roast
      </button>
      <button onClick={() => handleAnswer('roast', 'medium roast')}>
        Medium Roast
      </button>
      <button onClick={() => handleAnswer('roast', 'dark roast')}>
        Dark Roast
      </button>
      <button
        onClick={() =>
          handleAnswer('roast', 'light roast', 'medium roast', 'dark roast')
        }
      >
        I dont pay atention to this
      </button>
    </div>
  );
}

export default RoastQuestion;
