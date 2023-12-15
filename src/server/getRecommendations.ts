export const getRecommendations = async () => {
  const environment =
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
      ? 'http://localhost:3000'
      : 'https://www.joshallan.dev'

  const result = await fetch(`${environment}/api/recommendations`, {
    method: 'GET',
  })
  if (result.ok) {
    return result.json()
  }
  return []
}
