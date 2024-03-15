import axios from 'axios';
const baseURL = `${import.meta.env.VITE_COFFEE_API}/api`;

const setAuthorizationHeaders = () => {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  });
};

setAuthorizationHeaders();

export const getAllCoffeesHub = () => {
  return axios.get(`${baseURL}/coffeehub`);
};

export const getCoffeeHub = id => {
  return axios.get(`${baseURL}/coffeehub/${id}`);
};

export const addCoffeeQuiz = answer => {
  console.log('Sending quiz answers:', answer);
  return axios.post(`${baseURL}/coffeequiz`, answer);
};

export const getAllCoffeesTaste = () => {
  return axios.get(`${baseURL}/coffeetaste`);
};

export const getCoffeeTaste = id => {
  return axios.get(`${baseURL}/coffeetaste/${id}`);
};

export const addCoffeeTaste = coffee => {
  return axios.post(`${baseURL}/coffeetaste`, coffee);
};

export const updateCoffeeTaste = updatedCoffee => {
  return axios.put(
    `${baseURL}/coffeetaste/${updatedCoffee._id}`,
    updatedCoffee
  );
};

export const deleteCoffeeTaste = id => {
  return axios.delete(`${baseURL}/coffeetaste/${id}`);
};

export const getAllComments = id => {
  return axios.get(`${baseURL}/coffeehub/${id}/comments`);
};

export const addComment = (id, comment) => {
  return axios.post(`${baseURL}/coffeehub/${id}/comments`, comment);
};

export const updateComment = (id, updatedComment) => {
  return axios.put(`${baseURL}/coffeehub/comments/${id}`, updatedComment);
};

export const deleteComment = id => {
  return axios.delete(`${baseURL}/coffeehub/comments/${id}`);
};

export const upload = image => {
  return axios.post(`${baseURL}/upload`, image);
};
