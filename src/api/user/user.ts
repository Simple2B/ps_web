/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 1.0.4
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  User
} from '.././model'



/**
 * @summary Whoami
 */
export const aPIWhoami = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<User>> => {
    
    return axios.default.get(
      `/api/user/whoami`,options
    );
  }


export const getAPIWhoamiQueryKey = () => {
    return [`/api/user/whoami`] as const;
    }

    
export const getAPIWhoamiQueryOptions = <TData = Awaited<ReturnType<typeof aPIWhoami>>, TError = AxiosError<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIWhoami>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAPIWhoamiQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof aPIWhoami>>> = ({ signal }) => aPIWhoami({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof aPIWhoami>>, TError, TData> & { queryKey: QueryKey }
}

export type APIWhoamiQueryResult = NonNullable<Awaited<ReturnType<typeof aPIWhoami>>>
export type APIWhoamiQueryError = AxiosError<unknown>

/**
 * @summary Whoami
 */
export const useAPIWhoami = <TData = Awaited<ReturnType<typeof aPIWhoami>>, TError = AxiosError<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof aPIWhoami>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAPIWhoamiQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



