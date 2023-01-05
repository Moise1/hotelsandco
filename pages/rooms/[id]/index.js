import { useRouter } from "next/router";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import { getRoomDetails, getRoomImgs } from "../../api/roomsData";
import { RoomDetailsSkeleton } from "../../../utils/CustomSkeletons";

export default function RoomDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, status } = useQuery(["rooms", id], () => getRoomDetails(id));

  const photosQuery = useQuery(["photos"], getRoomImgs);

  let previewPics = [];
  for (let i = 0; i < photosQuery.data?.preview_photos.length; i++) {
    previewPics.push(photosQuery.data?.preview_photos[i].urls.regular);
  }
  return (
    <div className="px-40 pt-10 bg-white h-screen">
      {status === "loading" ? (
        <RoomDetailsSkeleton />
      ) : (
        <>
          <p className="text-black font-bold font-large my-3">
            {data?.location}
          </p>
          <div className="flex justify-between mb-3">
            <div className="description-container flex gap-x-2">
              <p className="text-black font-bold flex">
                <Icon icon="material-symbols:star" className="mt-1" />
                <span>{data?.stars}</span>
              </p>
              &#x2022;
              <p className="cursor-pointer underline underline-offset-2 ">
                {data?.reviews} reviews
              </p>
              &#x2022;
              <p className="flex">
                <Icon icon="fe:medal" className="mt-1" />
                <span>Super host</span>
              </p>
              &#x2022;
              <Link href="/location" className="underline">
                {data?.location}
              </Link>
            </div>

            <div className="options-container flex gap-x-3">
              <button className="underline underline-offset-2 flex gap-x-1 font-bold bg-white hover:rounded-lg hover:bg-neutral-100 p-3">
                <Icon icon="material-symbols:ios-share" className="mt-1" />
                <span>Share</span>
              </button>
              <button className="underline underline-offset-2 flex gap-x-1 font-bold bg-white hover:rounded-lg hover:bg-neutral-100 p-3">
                <Icon icon="mdi:cards-heart-outline" className="mt-1" />
                <span>Save</span>
              </button>
            </div>
          </div>
          <div className="grid gap-x-1 grid-cols-2">
            <img src={previewPics[0]} alt="" className="rounded-lg" />
            <div className="grid gap-x-1 gap-y-1 grid-cols-2">
              <img src={previewPics[2]} alt="" className="rounded-lg" />
              <img src={previewPics[2]} alt="" className="rounded-lg" />
              <img src={previewPics[2]} alt="" className="rounded-lg" />
              <img src={previewPics[2]} alt="" className="rounded-lg" />
            </div>
          </div>
          <div className="house-details-container mt-5">
            <h3 className="font-bold">Entire home hosted by {data?.host}</h3>
            <div className="house-details flex gap-x-1">
              <p>{data?.guests} guests</p>
              &#x2022;
              <p>{data?.bedRooms} bedrooms</p>
              &#x2022;
              <p>{data?.beds} beds</p>
              &#x2022;
              <p>{data?.baths} baths</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
