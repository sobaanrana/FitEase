export const postQuestionnaire = (data) => {
  return fetch(`http://localhost:8000/api/questionnaire/`, {
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
export const updateQuestionnaire = (id, data) => {
  return fetch(`http://localhost:8000/api/questionnaire/${id}/`, {
    method: 'PUT',
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

export const getLoggedInUser = (id) => {
  return fetch(`http://localhost:8000/api/user/${id}/`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const getQuesByUser = () => {
  return fetch(`http://localhost:8000/api/questionnaire/by-email/`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
