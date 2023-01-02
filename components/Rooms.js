import { getRooms } from "../pages/api/getRooms";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import moment from 'moment';

export default function Rooms() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  const formattedDate = (date) =>{
    const dateOne =  moment.utc(date[0]).format('MMM DD');
    const dateTwo = moment.utc(date[1]).format('DD')
    return `${dateOne} - ${dateTwo}`;
  };
  return (
    <div className="flex grid gap-4 grid-cols-4">
      {data?.map((room) => (
        <div key={room.id} className="grid justify-items-start">
          <img src={room.roomImage} alt="" className="rounded-lg" />

          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold">{room.location}</p>
              <p className="text-gray-400">Viewed {room.views} times last week</p>
              <p className="text-gray-400">{formattedDate(room.availabilityDate)}</p>
              <p><span className="font-bold">${room.price}</span> night</p>
            </div>
            <div className="flex justify-center gap-x-1">
              <Icon icon="material-symbols:star" />
              <p>{room.stars}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
