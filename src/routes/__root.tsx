import {QueryClientProvider} from '@tanstack/react-query';
import {createRootRoute, Outlet} from '@tanstack/react-router';

import {queryClient} from '@/queryClient';
import {Toaster} from '@/components/ui/sonner';

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <Toaster richColors closeButton />
      </QueryClientProvider>
    </>
  ),
});
