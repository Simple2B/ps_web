import {Facebook} from '../icons/facebook';
import {Google} from '../icons/google';
import {Button} from '../ui/button';

export const SocialSignIn = () => {
  return (
    <div className="flex justify-between w-full mb-4">
      <Button className="w-[175px] bg-white rounded-full font-primaryRegular border border-[#3949AB] hover:text-white text-[14px] hover:bg-slate-400 text-[#3949AB]">
        <Google />
        Google
      </Button>
      <Button className="w-[175px] bg-white rounded-full font-primaryRegular border border-[#3949AB] hover:text-white text-[14px] hover:bg-slate-400 text-[#3949AB]">
        <div className="mr-3">
          <Facebook />
        </div>
        Facebook
      </Button>
    </div>
  );
};
