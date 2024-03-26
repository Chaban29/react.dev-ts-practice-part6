import { ChangeEvent, FC, useState } from 'react';

export const MyTextFiled: FC = () => {
  const [text, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label htmlFor='text'>
      <input
        type='text'
        name='text'
        id='text'
        value={text}
        onChange={handleChange}
      />
    </label>
  );
};
