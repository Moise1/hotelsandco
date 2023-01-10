import Head from "next/head";
import { Inter } from "@next/font/google";
import { fetchRooms, Rooms } from "../components/Rooms";
import { RoomsSkeleton } from "../utils/CustomSkeletons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { status, isFetching, render } = fetchRooms();
  return (
    <>
      <Head>
        <title>Hotels&amp;Co</title>
        <meta name="description" content="Hotels&Co" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`p-24 bg-white h-auto relative ${inter.className}`}>
        {status === "loading" || isFetching ? <RoomsSkeleton /> : render}
      </main>
    </>
  );
}
