import {FC, ReactNode} from 'react';

import pj from '../../../package.json';
interface BackgroundWrapperProps {
  children: ReactNode;
}

export const BackgroundWrapper: FC<BackgroundWrapperProps> = ({children}) => {
  return (
    <div className="bg-[#5769D4] w-screen h-screen items-center justify-center flex relative">
      <p className="absolute text-white top-2 left-2">v{pj.version}</p>
      {children}
    </div>
  );
};
