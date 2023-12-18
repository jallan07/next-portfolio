export const getRecommendations = async () => {
  const result = await fetch(`${process.env.API_URL}/api/recommendations`, {
    method: 'GET',
  })
  console.log(
    '🚀 ~ file: getRecommendations.ts:4 ~ getRecommendations ~ `${process.env.API_URL}/api/recommendations`:',
    `${process.env.API_URL}/api/recommendations`,
  )
  if (result.ok) {
    return result.json()
  }
  return []
}
