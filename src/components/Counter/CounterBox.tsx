import { FC, useState, ChangeEvent } from 'react';
import { Counter } from './Counter';

export const CounterBox: FC = () => {
  const [isFancy, setIsFancy] = useState<boolean>(false);

  const handleCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsFancy(event.target.checked);
  };

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
          onChange={handleCheckedChange}
        />
        Use fancy styling
      </label>
    </div>
  );
};
