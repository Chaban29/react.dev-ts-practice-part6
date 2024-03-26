import { IFoods } from '../../data';

export const filterItems = (query: string, items: IFoods[]): IFoods[] => {
  query = query.toLowerCase().trim();
  return items.filter((item: IFoods) =>
    item.name.toLowerCase().includes(query)
  );
};
