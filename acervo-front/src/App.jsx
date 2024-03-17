import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import HowToTaste from './pages/HowToTaste';
import CoffeeQuiz from './pages/CoffeeQuiz';
import CoffeeHistory from './pages/CoffeeHistory';
import CoffeeTaste from './pages/CoffeeTaste';
import CoffeeHub from './pages/CoffeeHub';
import CoffeeHubDetails from './pages/CoffeeHubDetails';
import CreateCoffee from './pages/CreateCoffee';
import CoffeeTasteDetails from './pages/CoffeeTasteDetails';
import EditCoffeeTaste from './pages/EditCoffeeTaste';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/howtotaste' element={<HowToTaste />} />
          <Route path='/coffeequiz' element={<CoffeeQuiz />} />
          <Route path='/coffeehistory' element={<CoffeeHistory />} />
          <Route
            path='/coffeetaste'
            element={
              <IsPrivate>
                <CoffeeTaste />
              </IsPrivate>
            }
          />
          <Route
            path='/coffeehub'
            element={
              <IsPrivate>
                <CoffeeHub />
              </IsPrivate>
            }
          />
          <Route
            path='/coffeehub/:coffeeId'
            element={
              <IsPrivate>
                <CoffeeHubDetails />
              </IsPrivate>
            }
          />
          <Route
            path='/coffeetaste/create'
            element={
              <IsPrivate>
                <CreateCoffee />
              </IsPrivate>
            }
          />
          <Route
            path='/coffeetaste/:coffeeId'
            element={
              <IsPrivate>
                <CoffeeTasteDetails />
              </IsPrivate>
            }
          />
          <Route
            path='/coffeetaste/edit/:coffeeId'
            element={
              <IsPrivate>
                <EditCoffeeTaste />
              </IsPrivate>
            }
          />
          <Route
            path='/signup'
            element={
              <IsAnon>
                <SignUp />
              </IsAnon>
            }
          />
          <Route
            path='/login'
            element={
              <IsAnon>
                <Login />
              </IsAnon>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
