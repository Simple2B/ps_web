import {LoginForm} from '@/components/login-form/login-form';
import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#5769D4] w-screen h-screen items-center justify-center flex">
      <LoginForm />
    </div>
  );
}
