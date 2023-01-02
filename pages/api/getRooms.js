import axios from 'axios';

export const getRooms = async () =>{
  const {data} = await axios.get('https://63b29d465901da0ab368e025.mockapi.io/api/v1/rooms');
  return data;
}
