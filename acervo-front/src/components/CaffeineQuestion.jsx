import { useCoffeeQuiz } from '../context/coffeequiz.context';

function CaffeineQuestion() {
  const { handleAnswer } = useCoffeeQuiz();
  return (
    <div>
      <h3>How do you take your coffee normally?</h3>
      <button onClick={() => handleAnswer('caffeine', 'regular')}>
        Regular
      </button>
      <button onClick={() => handleAnswer('caffeine', 'decaf')}>Decaf</button>
      <button onClick={() => handleAnswer('caffeine', 'regular')}>
        Varies
      </button>
    </div>
  );
}

export default CaffeineQuestion;
