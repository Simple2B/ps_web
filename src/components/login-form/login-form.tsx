import {FC} from 'react';
import {Link} from '@tanstack/react-router';
import {Spacer} from './spacer';
import {SocialSignIn} from './social-signin';
import {Button} from '../ui/button';
import {Wrapper} from '../wrapper/wrapper';
import {Login} from './login';

export const LoginForm: FC = () => {
  return (
    <Wrapper>
      <div className="bg-white w-[486px] rounded-r-2xl items-center justify-center flex flex-col px-[64px]">
        <h2 className="text-[#3949AB] font-primaryRegular text-[20px] mb-[64px]">
          Log in
        </h2>
        <Login />
        <div className=" font-primaryRegular text-[#828282] flex items-center ">
          <Spacer />
          Or
          <Spacer />
        </div>
        <SocialSignIn />
        <p className="font-primaryRegular text-[#828282]">
          Have no account yet?
        </p>
        <Link to="/register" className="w-full mt-4">
          <Button
            type="submit"
            className="bg-white rounded-full w-full font-primaryRegular border border-[#3949AB] hover:text-white text-[14px] hover:bg-slate-400 text-[#3949AB]">
            Register
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};
