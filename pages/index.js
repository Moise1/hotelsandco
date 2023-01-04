import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import fetchAllRooms from "../components/Rooms";
import { NavbarSkeleton, RoomsSkeleton } from "../utils/CustomSkeletons";
import "react-multi-carousel/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { render, roomsStatus, photosStatus } =
    fetchAllRooms();
  return (
    <>
      <Head>
        <title>Hotels&amp;Co</title>
        <meta name="description" content="Hotels&Co"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {roomsStatus === "loading" || photosStatus === "loading" ? (
        <NavbarSkeleton />
      ) : (
        <Navbar />
      )}
      <main className="p-24 bg-white h-auto">
        {roomsStatus === 'loading' ? <RoomsSkeleton /> : render }
      </main>
    </>
  );
}
