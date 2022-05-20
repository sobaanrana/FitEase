export const getExercises = async () => {
  return await fetch('http://127.0.0.1:8000/api/exercise-prediction/results/', {
    method: 'GET',
  })
    .then((response) => {
      return response.json() // only json repsonse is returned an other fields i.e.status, render etc are missed
    })
    .catch((err) => console.log(err))
}
export const getDiet = async () => {
  return await fetch('http://127.0.0.1:8000/api/diet-prediction/results/', {
    method: 'GET',
  })
    .then((response) => {
      return response.json() // only json repsonse is returned an other fields i.e.status, render etc are missed
    })
    .catch((err) => console.log(err))
}
