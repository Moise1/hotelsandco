import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";
import NavbarItems from "./NavbarItems";
import Carousel from "react-multi-carousel";

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

const icons = [
  {
    icon: <Icon icon="mdi:unidentified-flying-object" width="24" height="24" />,
    text: "OMG!",
  },
  {
    icon: <Icon icon="mdi:curtains" width="24" height="24" />,
    text: "Amazing Views",
  },
  {
    icon: <Icon icon="ph:house-line" width="24" height="24" />,
    text: "Tiny homes",
  },
  {
    icon: <Icon icon="game-icons:grand-piano" width="24" height="24" />,
    text: "Grand pianos",
  },
  {
    icon: <Icon icon="tabler:chart-grid-dots" width="24" height="24" />,
    text: "Off-the-grid",
  },
  {
    icon: <Icon icon="tabler:chart-grid-dots" width="24" height="24" />,
    text: "Cabins",
  },
  {
    icon: <Icon icon="ep:dish-dot" width="24" height="24" hFlip={true} />,
    text: "Luxe",
  },
  {
    icon: <Icon icon="mdi:ski" width="24" height="24" />,
    text: "Ski-in/out",
  },
  {
    icon: <Icon icon="icon-park-outline:double-bed" width="24" height="24" />,
    text: "Private rooms",
  },
  {
    icon: <Icon icon="carbon:palm-tree" width="24" height="24" />,
    text: "Tropical",
  },
  {
    icon: <Icon icon="game-icons:habitat-dome" width="24" height="24" />,
    text: "Domes",
  },
];

export default function Nabar({deviceType}) {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="divide-y divide-slate-200">
      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" legacyBehavior className="cursor-pointer">
              <a>
                <h2 className="text-2xl text-primary-red font-bold">
                  Hotels&amp;Co
                </h2>
              </a>
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

      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <Carousel
            className="mt-5"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            swipeable={false}
            draggable={false}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
          >
            {icons.map(({ icon, text }, idx) => (
              <div key={idx} className="grid justify-items-center gap-y-2">
                {icon}
                <p className="text-sm text-current">{text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </nav>
    </div>
  );
}
