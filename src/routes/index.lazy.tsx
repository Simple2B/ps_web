import {BackgroundWrapper} from '@/components/background-wrapper/background-wrapper';
import {LoginForm} from '@/components/login-form/login-form';
import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <BackgroundWrapper>
      <LoginForm />
    </BackgroundWrapper>
  );
}
