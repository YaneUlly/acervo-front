import axios from 'axios';
import { useState, useEffect } from 'react';

let API_URL = `https://coffee-type-api.web.app/coffee`;

function CoffeeHistory() {
  const [showCoffeeHistory, setShowCoffeeHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCoffeeHistory = () => {
    setIsLoading(true);

    console.log('Fetching coffee history...');
    axios
      .get(API_URL)
      .then(response => {
        console.log('Response received:', response);
        setShowCoffeeHistory(response.data);
        console.log('showCoffeeHistory:', showCoffeeHistory);
      })
      .catch(error => {
        console.error('Error fetching coffee history:', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
        console.log('Is loading', setIsLoading);
        console.log('Finished fetching coffee history');
      });
  };

  useEffect(() => {
    getCoffeeHistory();
  }, []);

  return (
    <div>
      <h1>Coffee History</h1>
      <div>
        {showCoffeeHistory.length === 0 ? (
          <p>No coffee data available</p>
        ) : (
          <div>
            {showCoffeeHistory.map((coffee, index) => (
              <div key={index}>
                <p>
                  <strong>Type:</strong> {coffee.type}
                </p>
                <p>
                  <strong>Origin:</strong>
                </p>
                <ul>
                  {coffee.origin.map((region, index) => (
                    <li key={index}>
                      <strong>{region.region}:</strong>{' '}
                      {region.countries.join(', ')}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Characteristics:</strong>
                </p>
                <ul>
                  {Object.entries(coffee.characteristics).map(
                    ([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  )}
                </ul>
                <p>
                  <strong>History:</strong> {coffee.history}
                </p>
                <p>
                  <strong>Other Names:</strong> {coffee.other_names.join(', ')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CoffeeHistory;
