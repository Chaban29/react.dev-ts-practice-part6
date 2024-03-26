import { FC } from 'react';
import { IFoods } from '../../data';

interface IListProps {
  items: IFoods[];
}

export const List: FC<IListProps> = ({ items }: IListProps) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
