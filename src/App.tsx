import { FC, useState } from 'react';
import './App.css';
import { Form } from './components/Form';

export const App: FC = () => {
  const [showHint, setShowHint] = useState<boolean>(false);
  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      {showHint ? (
        <button onClick={() => setShowHint(false)}>Hide hint</button>
      ) : (
        <button onClick={() => setShowHint(true)}>Show hint</button>
      )}
    </div>
  );
};
