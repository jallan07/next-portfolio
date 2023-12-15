export const getRecommendations = async () => {
  const result = await fetch(`${process.env.URL}/api/recommendations`, {
    method: 'GET',
  })
  if (result.ok) {
    return result.json()
  }
  return []
}
