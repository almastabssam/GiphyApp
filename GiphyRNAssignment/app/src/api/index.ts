import { API_KEY, BASE_URL } from "../../config/AppConfig.ts";

export const getTrendingGifs = async (limit) => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending?api_key=${API_KEY}&limit=${limit}`,
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching trending gifs', error);
    throw error;
  }
};

export const searchGifs = async (query, limit) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=${limit}`,
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error searching gifs', error);
    throw error;
  }
};
