import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { getMockedFetch } from '@/test-util'
import { useGetTaxBrackets } from './useGetTaxBrackets'

let spiedMock: jest.SpyInstance
beforeEach(() => {
  spiedMock = jest.spyOn(global, 'fetch').mockImplementation(getMockedFetch(null))
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('useGetTaxBrackets Hook', () => {
  it('calling fetchData should trigger a network call', async () => {
    const { result } = renderHook(() => useGetTaxBrackets())
    const fetchData = result.current[3]
    expect(spiedMock?.mock.calls.length).toBe(0)

    await act(async () => {
      await fetchData()
    })

    expect(spiedMock?.mock.calls.length).toBe(1)
  })
})
