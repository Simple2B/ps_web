import {FC, ReactNode} from 'react';
import {Logo} from '../icons/logo';
import {IllustrationImage} from '../illustration-image/illustration-image';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({children}) => {
  return (
    <div className="w-[1218px] h-[743px] flex shadow-lg relative">
      <div className="absolute left-10 top-10">
        <Logo />
      </div>
      <div className="w-[732px] bg-[#3949AB] rounded-l-2xl items-center justify-center flex flex-col">
        <IllustrationImage />
        <h1 className="text-white font-primaryRegular text-[24px]">
          Welcome aboard my friend
        </h1>
        <p className="text-white font-primaryRegular text-[14px]">
          just a couple of clicks and we start
        </p>
      </div>
      {children}
    </div>
  );
};
