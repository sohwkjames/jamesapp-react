import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_URL}/tickets`;

// process.env.API_URL ? `${process.env.API_URL}/notes` : ''

console.log("baseUrl", baseUrl);
const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
