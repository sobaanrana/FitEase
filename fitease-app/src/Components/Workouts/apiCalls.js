export const getWorkouts = () => {
  return fetch(`http://localhost:8000/api/workouts/`, { method: 'GET' })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
