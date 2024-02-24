export async function getAllCourses() {
  const response = await fetch(
    'https://fitness-pro-9efbb-default-rtdb.europe-west1.firebasedatabase.app/cousres.json',
    {
      method: 'GET',
    },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}