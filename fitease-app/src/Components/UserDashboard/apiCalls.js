export const getExercises = async () => {
  return await fetch(
    'http://localhost:8000/api/prediction/exercise-prediction/',
    {
      method: 'GET',
    }
  )
    .then((response) => {
      return response.json() // only json repsonse is returned an other fields i.e.status, render etc are missed
    })
    .catch((err) => console.log(err))
}
export const getDiet = async () => {
  return await fetch('http://localhost:8000/api/prediction/diet-prediction/', {
    method: 'GET',
  })
    .then((response) => {
      return response.json() // only json repsonse is returned an other fields i.e.status, render etc are missed
    })
    .catch((err) => console.log(err))
}

export const postLoggedInUser = async (user) => {
  return await fetch('http://localhost:8000/api/prediction/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }), // user is email of logged in user
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
