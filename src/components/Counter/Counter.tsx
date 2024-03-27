import { FC, useState } from 'react';
import { useCount } from '../../hooks/useCount';

interface IFancy {
  isFancy?: boolean;
  person: string;
}

export const Counter: FC<IFancy> = ({ person }: IFancy) => {
  const { count, increment } = useCount(0);
  const [isHover, setIsHover] = useState<boolean>(false);

  let className = 'counter';

  if (isHover) {
    className += ' hover';
  }

  // if (isFancy) {
  //   className += ' fancy';
  // }

  return (
    <div
      className={className}
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      <h3>{person} score:</h3>
      <h1>{count}</h1>
      <button type='button' onClick={increment}>
        Add one
      </button>
    </div>
  );
};
