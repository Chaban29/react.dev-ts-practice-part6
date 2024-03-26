import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface ISearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchBar: FC<ISearchBarProps> = ({ query, setQuery }) => {
  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <label htmlFor='search'>
      Search:{' '}
      <input
        type='text'
        name='search'
        id='search'
        value={query}
        onChange={(event) => handleInputValueChange(event)}
      />
    </label>
  );
};
