import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import Link from "next/link";
import moment from "moment";
import { getRooms, getRoomImgs } from "../pages/api/getRooms";
import CustomCarousel from "./CustomCarousel";
import styles from "../styles/Carousel.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Rooms() {
  const roomsQuery = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  useEffect(() => {
    getRoomImgs();
  }, []);
  const photosQuery = useQuery({
    queryKey: ["photos"],
    queryFn: getRoomImgs,
  });

  const formattedDate = (date) => {
    const fromDate = moment.utc(date[0]).format("MMM DD");
    const toDate = moment.utc(date[1]).format("DD");
    return `${fromDate} - ${toDate}`;
  };
  return (
    <div className="flex grid gap-4 grid-cols-4">
      {roomsQuery.data?.map((room) => {
        const modifiedData = {
          ...room,
          roomImgs: Array(5).fill(photosQuery.data[room.id]?.urls),
        };
        return (
          <Link
            href="/room-details"
            key={modifiedData.id}
            className="grid justify-items-start"
          >
            <CustomCarousel
              itemClass={styles.carouselItem}
              containerClass="mt-3 mb-3 absolute"
              deviceType="desktop"
              responsive={responsive}
            >
              {modifiedData.roomImgs.map((img, idx) => (
                <img
                  key={idx}
                  src={img?.regular}
                  alt=""
                  // height="100px"
                  // width="100px"
                />
              ))}
            </CustomCarousel>
            <div className="flex justify-between mt-2">
              <div>
                <p className="font-bold">{modifiedData.location}</p>
                <p className="text-gray-400">
                  Viewed {modifiedData.views} times last week
                </p>
                <p className="text-gray-400">
                  {formattedDate(modifiedData.viewDate)}
                </p>
                <p>
                  <span className="font-bold">${modifiedData.price}</span> night
                </p>
              </div>
              <div className="flex justify-center gap-x-1">
                <Icon icon="material-symbols:star" />
                <p>{modifiedData.stars}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
