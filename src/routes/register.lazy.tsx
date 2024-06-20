import {BackgroundWrapper} from '@/components/background-wrapper/background-wrapper';
import {RegistrationForm} from '@/components/registration-form/registration-form';
import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/register')({
  component: Register,
});

function Register() {
  return (
    <BackgroundWrapper>
      <RegistrationForm />
    </BackgroundWrapper>
  );
}
