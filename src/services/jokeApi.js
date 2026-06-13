import axios from 'axios';

const API_BASE_URL = 'https://v2.jokeapi.dev';

const jokeApi = axios.create({
  baseURL: API_BASE_URL,
});

export const getRandomJoke = async (category = 'Any') => {
  try {
    const response = await jokeApi.get(`/joke/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
};

export const getJokesByType = async (category = 'Any', type = 'any') => {
  try {
    const response = await jokeApi.get(`/joke/${category}?type=${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
};

export const getCategories = () => {
  return ['Any', 'General', 'Programming', 'Knock-knock', 'Misc', 'Dark', 'Pun'];
};
