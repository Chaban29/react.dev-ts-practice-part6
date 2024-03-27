import { FC, useState } from 'react';
import { Form } from '../Form/Form';

type TypeHint = boolean;

export const Hint: FC = () => {
  const [showHint, setShowHint] = useState<TypeHint>(false);
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
