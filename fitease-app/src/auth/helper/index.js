//import { API } from "../../backend";

console.log("from before fetch func ", JSON.stringify());
var user;

export const signup = (user) => {
  //console.log("from fetch func ", JSON.stringify(user));
  return fetch("http://localhost:8000/api/user/", {
    // mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), //the data was not proper json format
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const login = (user) => {
  const formData = new FormData(); // sever is accepting form data
  // we ahve used email and password but with formdata its compulsory that there si name field in the formdata
  // So add fictional data

  for (const name in user) {
    formData.append(name, user[name]);
  }
  return fetch("http://localhost:8000/api/user/login/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    const { token, user } = data;
    const { id } = user;
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    //next(); // middleware as continue forward
  }
};

export const isAuthenticated = () => {
  if (localStorage.getItem("loggedInUser")) {
    return JSON.parse(localStorage.getItem("loggedInUser"));
  } else {
    return false;
  }
};

export const signout = () => {
  const userId = isAuthenticated().user.id;
  if (typeof window !== undefined) {
    localStorage.removeItem("loggedInUser");
    // empty cart here?
    return fetch(`http://localhost:8000/api/user/logout/${userId}/`, {
      method: "GET",
    })
      .then((response) => {
        console.log(response); //        console.log("Logout success");
        // next();
      })
      .catch((err) => console.log(err));
  }
};
