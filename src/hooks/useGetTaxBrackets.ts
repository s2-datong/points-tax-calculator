import { useFetch } from './useFetch'

type ReturnValue<T, E> = readonly [T | undefined, boolean, E | undefined, () => Promise<void>]

export const useGetTaxBrackets = <T, E>(): ReturnValue<T, E> => {
  const url = process.env.REACT_APP_TAX_API_URL ?? ''
  const { data, loading, error, fetchData } = useFetch<T, E>(`${url}/tax-calculator/brackets/2021`)
  return [data, loading, error, fetchData] as const
}
