import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import Link from "next/link";
import moment from "moment";
import { getRooms, getRoomImgs } from "../pages/api/getRooms";
import CustomCarousel from "./CustomCarousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function fetAllRooms() {
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

  return {
    roomsLoadingStatus: roomsQuery.status,
    photosLoadingStatus: photosQuery.status,
    render: (
      <div className="grid gap-x-8 gap-y-4 grid-cols-4">
        {roomsQuery.data?.map((room) => {
          let previewPics = [];
          for (let i = 0; i < photosQuery.data?.preview_photos.length; i++) {
            previewPics.push(photosQuery.data?.preview_photos[i].urls.small);
          }
          const modifiedData = {
            ...room,
            roomImgs: previewPics,
          };
          return (
            <div key={modifiedData.id}>
              <CustomCarousel
                containerClass="mt-3 mb-3 container"
                responsive={responsive}
                withDots
                showDots
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                swipeable
                slidesToSlide={1}
                draggable
                focusOnSelect={false}
                infinite
                additionalTransfrom={0}
                centerMode={false}
                minimumTouchDrag={80}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={500}
              >
                {modifiedData.roomImgs?.map((img, idx) => (
                  <div className="h-64">
                    <Icon
                      icon="mdi:cards-heart-outline"
                      className="absolute top-5 right-5 cursor-pointer"
                      height="25"
                      width="25"
                    />
                    <Link href="/room-details">
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        className="rounded-lg h-full w-full"
                      />
                    </Link>
                  </div>
                ))}
              </CustomCarousel>
              <Link href="/room-details" className="flex justify-between mt-2">
                <div>
                  <p className="font-bold">{modifiedData.location}</p>
                  <p className="text-gray-400">
                    Viewed {modifiedData.views} times last week
                  </p>
                  <p className="text-gray-400">
                    {formattedDate(modifiedData.viewDate)}
                  </p>
                  <p>
                    <span className="font-bold">${modifiedData.price}</span>{" "}
                    night
                  </p>
                </div>
                <div className="flex justify-center gap-x-1">
                  <Icon icon="material-symbols:star" />
                  <p>{modifiedData.stars}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    ),
  };
}
