import { useCoffeeQuiz } from '../context/coffeequiz.context';

function RegionQuestion() {
  const { handleAnswer } = useCoffeeQuiz();

  return (
    <div>
      <h3>Do you usually buy you coffee from which region?</h3>
      <button onClick={() => handleAnswer('region', 'africa')}>africa</button>
      <button onClick={() => handleAnswer('region', 'arabia')}>Arabia</button>
      <button onClick={() => handleAnswer('region', 'asia')}>Asia</button>
      <button onClick={() => handleAnswer('region', 'central america')}>
        Central America
      </button>
      <button onClick={() => handleAnswer('region', 'south america')}>
        South America
      </button>
      <button
        onClick={() =>
          handleAnswer(
            'region',
            'south america',
            'arabia',
            'asia',
            'central america'
          )
        }
      >
        It doesnt matter for me
      </button>
    </div>
  );
}

export default RegionQuestion;
