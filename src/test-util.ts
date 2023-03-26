export const getMockedFetch = (result: any) => async (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<any> => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        ok: true,
        json: async () =>
          await Promise.resolve(result)
      })
    }, 200)
  )
}