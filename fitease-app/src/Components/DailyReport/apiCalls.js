export const postDailyReportMsg = (msg, user) => {
  return fetch('http://localhost:8000/api/daily-report/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, msg }),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const getMsgDict = async () => {
  return await fetch('http://127.0.0.1:8000/api/daily-report/msg/', {
    method: 'GET',
  })
    .then((response) => {
      return response.json() // only json repsonse is returned an other fields i.e.status, render etc are missed
    })
    .catch((err) => console.log(err))
}
