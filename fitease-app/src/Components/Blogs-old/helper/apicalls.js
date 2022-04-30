export const getPosts = () => {
  return fetch(`http://localhost:8000/api/blogs/`, { method: "GET" }) //${API}blog
    .then((response) => {
      return response.json(); // recieving json file in response ; converting into json format
    })
    .catch((err) => console.log(err));
};

export const getPost = (id) => {
  return fetch(`http://localhost:8000/api/blogs/${id}/`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};
// Todo : Use ${API} stored as variabe for backend as backend variable
