import { FC, useState } from 'react';
import { Counter } from './Counter';

export const CounterContainer: FC = () => {
  const [isFancy, setIsFancy] = useState<boolean>(false);
  return (
    <div>
      {/* {isFancy ? (
        <div>
          <Counter isFancy={true} />
        </div>
      ) : (
        <section>
          <Counter isFancy={false} />
        </section>
      )} */}
      <label htmlFor='check'>
        <input
          type='checkbox'
          name='check'
          id='check'
          checked={isFancy}
          onChange={(e) => setIsFancy(e.target.checked)}
        />
        Show fancy styles
      </label>
    </div>
  );
};
