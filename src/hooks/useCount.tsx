import { useState, useCallback } from 'react';

type TypeInitialValue = number;

interface ICountReturn {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const useCount = (initialValue = 0): ICountReturn => {
  const [counter, setCounter] = useState<TypeInitialValue>(initialValue);

  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const decrement = useCallback(() => {
    if (counter < 1) return;
    setCounter((prevCounter) => prevCounter - 1);
  }, [counter]);

  return { counter, increment, decrement };
};
