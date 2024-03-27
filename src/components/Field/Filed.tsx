import { FC, useState } from 'react';
import { MyTextFiled } from './MyTextFiled';
import { useCount } from '../../hooks/useCount';

export const Field: FC = () => {
  const { count, increment } = useCount(0);
  const [inputText, setInputText] = useState<string>('');

  const handleClearInputValue = () => {
    setInputText('');
  };

  return (
    <>
      <MyTextFiled
        inputText={inputText}
        setInputText={setInputText}
        setClearInput={handleClearInputValue}
      />
      <button type='button' onClick={increment}>
        You Clicked {count} times
      </button>
    </>
  );
};
