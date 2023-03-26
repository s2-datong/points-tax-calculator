import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { getMockedFetch } from '@/test-util'
import { useFetch } from './useFetch'

let spiedMock: jest.SpyInstance
beforeEach(() => {
  spiedMock = jest.spyOn(global, 'fetch').mockImplementation(getMockedFetch({ data: [] }))
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('useFetch', () => {
  it('should make http call when fetchData is invoked', async () => {
    const { result } = renderHook(() => useFetch('http://localhost:5000'))

    expect(spiedMock?.mock.calls.length).toBe(0)
    await act(async () => {
      await result.current.fetchData()
    })
    expect(spiedMock?.mock.calls.length).toBe(1)
    expect(result.current.data).toStrictEqual({ data: [] })
  })

  it('should not make any http request when hook is initiated', () => {
    renderHook(() => useFetch('http://localhost:5000'))
    expect(spiedMock?.mock.calls.length).toBe(0)
  })
})
