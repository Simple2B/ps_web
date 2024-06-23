import {FC} from 'react';
import {PagesWrapper} from '../pages-wrapper/pages-wrapper';
import {useAPIGreeting} from '@/api/user/user';

export const HomePage: FC = () => {
  const {data} = useAPIGreeting({
    query: {
      enabled: false,
    },
  });
  return (
    <PagesWrapper>
      <div className="bg-white w-[486px] rounded-r-2xl items-center justify-center flex flex-col px-[64px]">
        <h2>{data && data.data.message}</h2>
      </div>
    </PagesWrapper>
  );
};
