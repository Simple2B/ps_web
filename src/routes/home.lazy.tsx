import {BackgroundWrapper} from '@/components/background-wrapper/background-wrapper';
import {HomePage} from '@/components/home/home-page';
import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/home')({
  component: Home,
});

function Home() {
  return (
    <BackgroundWrapper>
      <HomePage />
    </BackgroundWrapper>
  );
}
