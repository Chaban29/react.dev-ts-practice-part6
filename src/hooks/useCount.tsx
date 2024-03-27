import { useState, useCallback } from 'react';

type TypeInitialValue = number;

interface ICountReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCount = (initialValue = 0): ICountReturn => {
  const [count, setCount] = useState<TypeInitialValue>(initialValue);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);
  }, [count]);

  return { count, increment, decrement };
};
