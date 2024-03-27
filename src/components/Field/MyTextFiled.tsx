import { ChangeEvent, FC } from 'react';

interface IClearInputValue {
  inputText: string;
  setInputText: (text: string) => void;
  setClearInput: () => void;
}

export const MyTextFiled: FC<IClearInputValue> = ({
  inputText,
  setInputText,
  setClearInput,
}: IClearInputValue) => {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  return (
    <label htmlFor='text'>
      <input
        type='text'
        id='text'
        name='text'
        value={inputText}
        onChange={handleTextChange}
      />
      <button type='button' onClick={setClearInput}>
        Clear
      </button>
    </label>
  );
};
