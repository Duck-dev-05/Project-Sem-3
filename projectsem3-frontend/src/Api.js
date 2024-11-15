// src/api.js

import axios from 'axios';

const API_URL = 'https://localhost:5001/api';

export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/your-endpoint`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
