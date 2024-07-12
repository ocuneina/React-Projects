import { useState } from 'react';
import data from './data';
import Questions from './Questions_alt';

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
