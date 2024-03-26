import { FC, useState } from 'react';
import { Panel } from './Panel';

export const Accordion: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <h2>Lviv, Ukraine</h2>
      <br />
      <hr />
      <br />
      <Panel
        title='Information'
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        {' '}
        Lviv was founded by King Danylo around 1231-1235 (the first mention is
        from 1256).
      </Panel>
      <Panel
        title='Declare'
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        {' '}
        Lviv is a city in Ukraine, the administrative center of a region,
        agglomeration, district, urban community, a national-cultural and
        educational-scientific center of the country, a large industrial center
        and a transport hub, it is considered the capital of Galicia and the
        center of Western Ukraine. It is the fifth largest city in the country
        in terms of population.
      </Panel>
      <Panel
        title='Other'
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        {' '}
        The once-large Jewish community of the city was sharply reduced in
        number by the Nazis during the Holocaust. For decades there was no
        working synagogue in Lviv after the final one was closed by th
      </Panel>
    </>
  );
};
