import {QueryClientProvider} from '@tanstack/react-query';
import {createRootRoute, Outlet} from '@tanstack/react-router';
import {TanStackRouterDevtools} from '@tanstack/router-devtools';

import {queryClient} from '@/queryClient';
import {Suspense} from 'react';
import {Toaster} from '@/components/ui/sonner';

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
        <Toaster richColors closeButton />
      </QueryClientProvider>
    </>
  ),
});
