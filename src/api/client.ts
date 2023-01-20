type Config = {
  baseUrl: string
  apiKey?: string
}

export const createApiClient = ({ baseUrl, apiKey }: Config) => {
  const headers = apiKey ? { 'x-api-key': apiKey } : undefined
  return {
    async get<Res>(resource: string) {
      const res = await fetch(`${baseUrl}/${resource}`, { headers })
      return res.json() as Res
    },
    async post<Res>(resource: string, body: any) {
      const res = await fetch(`${baseUrl}/${resource}`, {
        method: 'POST',
        body,
        headers
      })
      return res.json() as Res
    }
  }
}

export const apiClient = createApiClient({
  baseUrl: process.env.REACT_APP_API_BASE_URL || '',
  apiKey: process.env.REACT_APP_API_KEY
})
