const mock = process.env.mock || false

const getRequestUrl = (mapping: any, key: string) => {
  const keyString = mock ? 'mock' : 'fact'
  return (mapping as any)[key][keyString]
}

export default getRequestUrl
