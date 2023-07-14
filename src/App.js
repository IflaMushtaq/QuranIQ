import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import { Constants } from './questions/Constants';

function App() {
  return (
    <div>
      {/* <quiz questions={quranQuiz}/> */}
      <Quiz questions={Constants.questions}/>
    </div>
  );
}

export default App;
