import axios from "axios";

const unsplashAccessKey = process.env.unsplashAccessKey;

export const getRooms = async () => {
  const { data } = await axios.get(
    "https://63b29d465901da0ab368e025.mockapi.io/api/v1/rooms"
  );
  return data;
};

export const getRoomImgs = async () => {
  const { data } = await axios.get(
    `https://api.unsplash.com/collections/1862377?client_id=${unsplashAccessKey}&per_page=32`
  );
  return data;
};
