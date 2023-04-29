import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import WordAndColors from './components/WordAndColors';

function App() {
  return (
    <div className="App">
      <h2>CORE Assignment #13: React Routing Practice</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/:number" element={ <Number /> } />
          <Route path="/:word" element={ <Word /> } />
          <Route path="/:word/:textColor/:bgColor" element={ <WordAndColors /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
