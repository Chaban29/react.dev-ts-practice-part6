import { FC, useState } from 'react';
import { Counter } from '../Counter/Counter';

export const ScoreBoard: FC = () => {
  const [isPlayerA, setIsPlayerA] = useState<boolean>(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter key='Taylor' person='Taylor' />
      ) : (
        <Counter key='Nick' person='Nick' />
      )}
      <button
        type='button'
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next Player
      </button>
    </div>
  );
};
