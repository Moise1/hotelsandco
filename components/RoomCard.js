import { CustomCarousel } from "./CustomCarousel";
import { Icon } from "@iconify/react";
import moment from "moment";
import Link from "next/link";

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

const formattedDate = (date) => {
  const fromDate = moment.utc(date[0]).format("MMM DD");
  const toDate = moment.utc(date[1]).format("DD");
  return `${fromDate} - ${toDate}`;
};
export const RoomCard = ({ room, previewPics, routeRoomId }) => {
  return (
    <div key={room?.id}>
      <CustomCarousel
        containerClass="mt-3 mb-3 container"
        deviceType="desktop"
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
        {previewPics?.map((img, idx) => (
          <div className="h-64">
            <Icon
              icon="mdi:cards-heart-outline"
              className="absolute top-5 right-5 cursor-pointer"
              height="25"
              width="25"
            />
            <Link
              href={{
                pathname: routeRoomId,
                query: { id: room?.id },
              }}
              as={`/rooms/${room?.id}`}
              passHref
              legacyBehavior
            >
              <a>
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className="rounded-lg h-full w-full"
                />
              </a>
            </Link>
          </div>
        ))}
      </CustomCarousel>
      <Link
        href={{
          pathname: routeRoomId,
          query: { id: room?.id },
        }}
        as={`/rooms/${room?.id}`}
        passHref
        legacyBehavior
      >
        <a className="flex justify-between mt-2">
          <div>
            <p className="font-bold">{room?.location}</p>
            <p className="font-bold">Room ID: {room?.id}</p>
            <p className="text-gray-400">Viewed {room?.views} times last week</p>
            <p className="text-gray-400">{formattedDate(room?.viewDate)}</p>
            <p>
              <span className="font-bold">${room?.price}</span> night
            </p>
          </div>
          <div className="flex justify-center gap-x-1">
            <Icon icon="material-symbols:star" />
            <p>{room?.stars}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
