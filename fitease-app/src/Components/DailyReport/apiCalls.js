export const postDailyReportMsg = (msg) => {
  return fetch('http://localhost:8000/api/daily-report/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ msg }),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
