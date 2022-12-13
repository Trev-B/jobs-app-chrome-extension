import axios from 'axios';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const createJob = async (body, token) => {
  const parsedBody = {};

  for (let key in body) {
    if (!!body[key]) {
      parsedBody[key.toLowerCase()] = body[key];
    }
  }

  try {
    const res = await axios.post(`${URL}/jobs`, parsedBody, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createJob };
