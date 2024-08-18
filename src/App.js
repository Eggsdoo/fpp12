import './App.css';
import Landing from './components/landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename='/fpp12'>
        <Routes>
          <Route path='/canadian_united_alliance' element={<><Landing /></>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
