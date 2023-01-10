import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRooms, getRoomImgs } from "../pages/api/roomsData";
import { RoomCard } from "./RoomCard";

const routeRoomId = "/rooms/[id]";

export const fetchRooms = () => {
  const [page, setPage] = useState(1);

  const { status, data, isFetching } = useQuery({
    queryKey: ["rooms", page],
    queryFn: () => getRooms(page),
    keepPreviousData: true,
  });

  const photosQuery = useQuery({
    queryKey: ["photos"],
    queryFn: getRoomImgs,
  });

  const handleNext = () => setPage((old) => old + 1);

  const handlePrev = () => setPage((old) => old - 1);

  return {
    status,
    isFetching,
    render: (
      <>
        {status !== "loading" && (
          <div className="flex sm:justify-center md:justify-end gap-x-5 mt-5">
            <button
              role="button"
              className="rounded-lg bg-black text-white p-2 w-20"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Previous
            </button>{" "}
            <p className="">Page {page}</p>
            <button
              role="button"
              className="rounded-lg bg-black text-white p-2 w-20"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {data?.map((room) => {
            let previewPics = [];
            for (let i = 0; i < photosQuery.data?.preview_photos.length; i++) {
              previewPics.push(photosQuery.data?.preview_photos[i].urls.small);
            }
            return (
              <RoomCard
                room={room}
                previewPics={previewPics}
                routeRoomId={routeRoomId}
              />
            );
          })}
        </div>
        {status !== "loading" && (
          <div className="flex sm:justify-center md:justify-end gap-x-5 mt-5">
            <button
              role="button"
              className="rounded-lg bg-black text-white p-2 w-20"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Previous
            </button>{" "}
            <p>Page {page}</p>
            <button
              role="button"
              className="rounded-lg bg-black text-white p-2 w-20"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}
      </>
    ),
  };
};

export const Rooms = () => {
  const {render} = fetchRooms()
 return render;
}