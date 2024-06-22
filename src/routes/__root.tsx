import {QueryClientProvider} from '@tanstack/react-query';
import {createRootRoute, Outlet} from '@tanstack/react-router';

import {queryClient} from '@/queryClient';
import {Toaster} from '@/components/ui/sonner';
import axios from 'axios';
import {getToken} from '@/utils/localStorage';

axios.interceptors.request.use(async request => {
  // Your interceptor logic here
  const token = getToken() ?? '';
  const headers = request.headers;
  if (token && headers) {
    headers.Authorization = `Bearer ${token}`;
  }
  return {
    ...request,
    headers,
  };
});

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
