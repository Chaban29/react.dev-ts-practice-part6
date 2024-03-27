import { FC, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { GlobalChat } from './components/ChatContainer/GlobalChat';

type TypePlayer = boolean;

export const App: FC = () => {
  const [isPlayerA, setIsPlayerA] = useState<TypePlayer>(true);
  return (
    <>
      {isPlayerA && <Counter key='Taylor' person='Taylor' />}
      {!isPlayerA && <Counter key='Nick' person='Nick' />}
      <button type='button' onClick={() => setIsPlayerA(!isPlayerA)}>
        Next player
      </button>
      <GlobalChat />
    </>
  );
};
