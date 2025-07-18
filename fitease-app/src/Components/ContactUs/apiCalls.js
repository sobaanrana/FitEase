export const postContact = (data) => {
  return fetch(`http://localhost:8000/api/contact/`, {
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
