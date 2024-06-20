import {FC, ReactNode} from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
}

export const BackgroundWrapper: FC<BackgroundWrapperProps> = ({children}) => {
  return (
    <div className="bg-[#5769D4] w-screen h-screen items-center justify-center flex">
      {children}
    </div>
  );
};
