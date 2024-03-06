import { useCoffeeQuiz } from '../context/coffeequiz.context';

function MethodQuestion() {
  const { handleAnswer } = useCoffeeQuiz();

  return (
    <div>
      <h3>Which method you use to brew your coffee?</h3>
      <button onClick={() => handleAnswer('method', 'espresso')}>
        Espresso Machine
      </button>
      <button onClick={() => handleAnswer('method', 'moka pot')}>
        Moka Pot
      </button>
      <button onClick={() => handleAnswer('method', 'aeropress')}>
        Aeropress
      </button>
      <button onClick={() => handleAnswer('method', 'mocchamaster')}>
        Mocchamaster
      </button>
      <button onClick={() => handleAnswer('method', 'V60')}>V60</button>
      <button onClick={() => handleAnswer('method', 'chemex')}>Chemex</button>
      <button
        onClick={() =>
          handleAnswer(
            'method',
            'espresso',
            'moka pot',
            'aeropress',
            'mocchamaster',
            'V60',
            'chemex'
          )
        }
      >
        Other
      </button>
    </div>
  );
}

export default MethodQuestion;
