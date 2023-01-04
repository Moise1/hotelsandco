import { useState } from "react";
import Link from "next/link";
import { adventureOptions } from "../utils/adventureOptions";
import SearchBar from "./SearchBar";
import NavbarItems from "./NavbarItems";
import CustomCarousel from "./CustomCarousel";
import styles from "../styles/Carousel.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
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

export default function Nabar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="sticky top-0 divide-y divide-slate-200">
      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="cursor-pointer">
              <h2 className="text-2xl text-primary-red font-bold">
                Hotels&amp;Co
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <SearchBar />
          <NavbarItems navbar={navbar} />
        </div>
      </nav>

      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <CustomCarousel
            itemClass={styles.carouselItem}
            containerClass="mt-3 mb-3"
            deviceType="desktop"
            responsive={responsive}
            ssr
            customTransition="all .5"
            transitionDuration={500}
          >
            {adventureOptions.map(({ icon, text }, idx) => (
              <button
                key={idx}
                className="grid justify-items-center gap-y-2 hover:border-b-2 border-gray-400 mb-0"
              >
                {icon}
                <p className="text-sm text-current">{text}</p>
              </button>
            ))}
          </CustomCarousel>
        </div>
      </nav>
    </div>
  );
}
