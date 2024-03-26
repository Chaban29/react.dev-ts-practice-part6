import { FC, useState } from 'react';
import { useCount } from '../../hooks/useCount';

interface ICounterProps {
  person: string;
}

export const Counter: FC<ICounterProps> = ({ person }: ICounterProps) => {
  const { counter, increment } = useCount(0);
  const [hover, setHover] = useState<boolean>(false);

  let className = 'counter';

  if (hover) {
    className += ' hover';
  }

  return (
    <div
      style={{ width: 200 }}
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      {/* <h1>{counter}</h1> */}
      <h1>
        {person}'s score: {counter}
      </h1>
      <button
        onClick={() => increment()}
        style={{ width: 150, margin: '0 auto' }}
      >
        {person ? 'Add fancy one' : 'Add one'}
      </button>
    </div>
  );
};
