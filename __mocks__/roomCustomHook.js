import {useState} from 'react';
import { useInfiniteQuery } from "@tanstack/react-query";
import { getRooms } from "../pages/api/roomsData";

export const useRoomsQuery = () => {
  const [page, setPate] = useState(1);
  const query = useQuery({
    queryKey: ["rooms", page], 
    queryFn: () => getRooms(page), 
    keepPreviousData: true
  });
  return query;
};
