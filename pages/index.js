import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import fetchAllRooms from "../components/Rooms";
import NavbarSkeleton from "../utils/NavbarSkeleton";
import styles from "../styles/Home.module.css";
import "react-multi-carousel/lib/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { render, roomsLoadingStatus, photosLoadingStatus } = fetchAllRooms();
  return (
    <>
      <Head>
        <title>Hotels&amp;Co</title>
        <meta name="description" content="Hotels&Co" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {roomsLoadingStatus === "loading" || photosLoadingStatus === "loading" ? (
        <NavbarSkeleton />
      ) : (
        <Navbar deviceType="desktop" />
      )}
      <main className="p-24 bg-white h-auto">{render}</main>
    </>
  );
}
