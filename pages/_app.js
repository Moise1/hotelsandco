import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import fetchAllRooms from "../components/Rooms";
import { Navbar, LearnMoreUpfront } from "../components/Navbar";
import { NavbarSkeleton } from "../utils/CustomSkeletons";
import "react-multi-carousel/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <>
      <LearnMoreUpfront />
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
