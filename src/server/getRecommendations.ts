const environment =
  process.env.ENVIRONMENT === 'local'
    ? 'http://localhost:3000'
    : 'https://www.joshallan.dev'

console.log(
  '🚀 ~ file: getRecommendations.ts:9 ~ getRecommendations ~ environment:',
  environment,
)

export const getRecommendations = async () => {
  const result = await fetch(`${environment}/api/recommendations`, {
    method: 'GET',
  })
  if (result.ok) {
    return result.json()
  }
  return []
}
