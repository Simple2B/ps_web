import {FC} from 'react';
import {Logo} from '../icons/logo';
import {Link} from '@tanstack/react-router';

export const LoginForm: FC = () => {
  return (
    <div className="w-[1218px] h-[743px] flex shadow-lg relative">
      <div className="absolute left-10 top-10">
        <Logo />
      </div>
      <div className="w-[732px] bg-[#3949AB] rounded-l-2xl items-center justify-center flex flex-col">
        <img
          src="../../public/illustration.png"
          alt="Illustration picture"
          className="w-[357px] h-[357px]"
        />
        <h1 className="text-white font-primaryRegular text-[24px]">
          Welcome aboard my friend
        </h1>
        <p className="text-white font-primaryRegular text-[14px]">
          just a couple of clicks and we start
        </p>
      </div>
      <div className="bg-white w-[486px] rounded-r-2xl">
        <h2 className="text-[#3949AB] font-primaryRegular text-[20px]">
          Log in
        </h2>
        <Form />
        <p>or</p>
        <SocialSignIn />
        <p>Have no account yet?</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};
