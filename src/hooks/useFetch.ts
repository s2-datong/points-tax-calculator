import { useState } from 'react'

interface ReturnValue<T, E> {
  data: T | undefined
  loading: boolean
  error: E | undefined
  fetchData: () => Promise<void>
}

export const useFetch = <T, E>(url: string): ReturnValue<T, E> => {
  const [data, setData] = useState<T | undefined>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<E | undefined>()

  const fetchData = async (): Promise<void> => {
    setLoading(true)
    setError(undefined)
    setData(undefined)

    let response: Response | undefined
    try {
      response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setData(data)
      } else {
        throw new Error('Failed')
      }
    } catch (error) {
      const body = await response?.json()
      setError(body as E)
    } finally {
      setLoading(false)
    }
  }

  return {
    data, loading, error, fetchData
  }
}
