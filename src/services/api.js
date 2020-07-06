import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data) {
  console.log(path);
  console.log(data);
  return new Promise((resolve, reject) => {
    return axios[method](`${path}`, data)
      .then(res => {
        if (!res.ok) {
          throw res;
        } else {
          return resolve(res.data);
        }
      })
      .catch(err => {
        return reject(err);
      });
  });
}
