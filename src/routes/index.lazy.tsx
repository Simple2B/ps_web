import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#5769D4] w-screen h-screen">
      <h3>Welcome Home!</h3>
    </div>
  );
}
