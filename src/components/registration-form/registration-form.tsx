import {FC} from 'react';
import {Link} from '@tanstack/react-router';

import {Button} from '../ui/button';
import {Wrapper} from '../wrapper/wrapper';
import {SocialSignIn} from '../login-form/social-signin';
import {Spacer} from '../login-form/spacer';
import {Register} from './register';

export const RegistrationForm: FC = () => {
  return (
    <Wrapper>
      <div className="bg-white w-[486px] rounded-r-2xl items-center justify-center flex flex-col px-[64px]">
        <h2 className="text-[#3949AB] font-primaryRegular text-[20px] mb-[64px]">
          Sign up
        </h2>
        <Register />
        <div className=" font-primaryRegular text-[#828282] flex items-center ">
          <Spacer />
          Or
          <Spacer />
        </div>
        <SocialSignIn />
        <p className="font-primaryRegular text-[#828282]">
          Have account already?
        </p>
        <Link to="/" className="w-full mt-4">
          <Button
            type="submit"
            className="bg-white rounded-full w-full font-primaryRegular border border-[#3949AB] hover:text-white text-[14px] hover:bg-slate-400 text-[#3949AB]">
            Log in
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};
