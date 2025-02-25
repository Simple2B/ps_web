/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 1.0.6
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  Greeting,
  Token,
  User
} from '.././model'

export const getAPITokenResponseMock = (overrideResponse: Partial< Token > = {}): Token => ({access_token: faker.word.sample(), token_type: faker.word.sample(), ...overrideResponse})

export const getAPIRegisterResponseMock = (overrideResponse: Partial< User > = {}): User => ({email: faker.word.sample(), username: faker.word.sample(), ...overrideResponse})

export const getAPIWhoamiResponseMock = (overrideResponse: Partial< User > = {}): User => ({email: faker.word.sample(), username: faker.word.sample(), ...overrideResponse})

export const getAPIGreetingResponseMock = (overrideResponse: Partial< Greeting > = {}): Greeting => ({message: faker.word.sample(), ...overrideResponse})


export const getAPITokenMockHandler = (overrideResponse?: Token | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<Token> | Token)) => {
  return http.post('*/api/auth/token', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAPITokenResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIRegisterMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<User> | User)) => {
  return http.post('*/api/auth/register', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAPIRegisterResponseMock()),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIWhoamiMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User> | User)) => {
  return http.get('*/api/user/whoami', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAPIWhoamiResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIGreetingMockHandler = (overrideResponse?: Greeting | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Greeting> | Greeting)) => {
  return http.get('*/api/user/greeting', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getAPIGreetingResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getAPIListEndpointsMockHandler = () => {
  return http.get('*/api/list-endpoints/', async () => {await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getApiMock = () => [
  getAPITokenMockHandler(),
  getAPIRegisterMockHandler(),
  getAPIWhoamiMockHandler(),
  getAPIGreetingMockHandler(),
  getAPIListEndpointsMockHandler()
]
