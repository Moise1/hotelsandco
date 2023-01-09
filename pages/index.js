import Head from "next/head";
import { Inter } from "@next/font/google";
import { AllRoooms } from "../components/Rooms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotels&amp;Co</title>
        <meta name="description" content="Hotels&Co" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`p-24 bg-white h-auto relative ${inter.className}`}>
        <AllRoooms />
      </main>
    </>
  );
}
