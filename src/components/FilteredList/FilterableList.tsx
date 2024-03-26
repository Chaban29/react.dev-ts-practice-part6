import { FC, Fragment, useState } from 'react';
import { SearchBar } from './SearchBar';
import { List } from './List';
import { foods } from '../../data';
import { filterItems } from './filterItems';

type TypeQuery = string;

export const FilterableList: FC = () => {
  const [query, setQuery] = useState<TypeQuery>('');
  const results = filterItems(query, foods);
  return (
    <Fragment>
      <SearchBar query={query} setQuery={setQuery} />
      <br />
      <hr />
      <br />
      <List items={results} />
    </Fragment>
  );
};
