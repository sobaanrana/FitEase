export const postSuccessStory = (data) => {
  return fetch(`http://localhost:8000/api/success-story/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const getSuccessStories = () => {
  return fetch(`http://localhost:8000/api/success-story/`, { method: 'GET' }) //${API}blog
    .then((response) => {
      return response.json() // recieving json file in response ; converting into json format
    })
    .catch((err) => console.log(err))
}

export const getSuccessStory = (id) => {
  return fetch(`http://localhost:8000/api/success-story/${id}/`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .catch((error) => console.log(error))
}
// Todo : Use ${API} stored as variabe for backend as backend variable
