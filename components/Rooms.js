import { Fragment } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import Link from "next/link";
import moment from "moment";
import { getRooms, getRoomImgs } from "../pages/api/roomsData";
import InfiniteScroll from "react-infinite-scroll-component";
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

const ROUTE_POST_ID = "/rooms/[id]";

export default function fetchAllRooms() {
  const { status, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["rooms"],
    getRooms,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info?.next) {
          return pages.length + 1;
        }
      },
    }
  );

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
    roomsStatus: status,
    photosStatus: photosQuery.status,
    render: status === "success" && (
      <InfiniteScroll
        dataLength={data?.pages?.length * 20}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4 className="text-center text-black">Loading...</h4>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {data?.pages?.map((page, idx) => (
            <Fragment key={idx}>
              {page.map((room) => {
                let previewPics = [];
                for (
                  let i = 0;
                  i < photosQuery.data?.preview_photos.length;
                  i++
                ) {
                  previewPics.push(
                    photosQuery.data?.preview_photos[i].urls.small
                  );
                }

                return (
                  <div key={room.id}>
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
                              pathname: ROUTE_POST_ID,
                              query: { id: room.id },
                            }}
                            as={`/rooms/${room.id}`}
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
                      href="/room-details"
                      className="flex justify-between mt-2"
                    >
                      <div>
                        <p className="font-bold">{room.location}</p>
                        <p className="text-gray-400">
                          Viewed {room.views} times last week
                        </p>
                        <p className="text-gray-400">
                          {formattedDate(room.viewDate)}
                        </p>
                        <p>
                          <span className="font-bold">${room.price}</span> night
                        </p>
                      </div>
                      <div className="flex justify-center gap-x-1">
                        <Icon icon="material-symbols:star" />
                        <p>{room.stars}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </InfiniteScroll>
    ),
  };
}
