import axios from "axios";
export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](`https://radiant-cliffs-13120.herokuapp.com${path}`, data)
      .then(res => {
        // if (!res.ok) {
        //   throw res;
        // } else {
        //   return resolve(res.data);
        // }
        console.log(res)
        resolve(res.data)
      })
      .catch(err => {
        return reject(err);
      });
  });
}
