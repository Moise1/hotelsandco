import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Fragment } from "react";

function Box({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function NavbarSkeleton() {
  return (
    <SkeletonTheme baseColor="#e5e5e5">
      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block mt-5">
            <Skeleton width={200} />
          </div>
          <Skeleton width={350} height={50} />
          <Skeleton width={100} height={50} />
        </div>
      </nav>

      <nav className="w-full bg-white shadwo">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="grid justify-items-center gap-y-2 hover:border-b-2 border-gray-400 mb-0">
            <Skeleton className="rounded-full" />
            <Skeleton />
          </div>
        </div>
      </nav>
    </SkeletonTheme>
  );
}

export const RoomsSkeleton = () => {
  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
      <SkeletonTheme baseColor="#e5e5e5">
        {Array.from("x".repeat(8)).map((item, idx) => (
          <Fragment key={idx}>
            <Skeleton width={300} height={200}>
              <Skeleton width={50} />
              <Skeleton width={50} />
              <Skeleton width={50} />
            </Skeleton>
          </Fragment>
        ))}
      </SkeletonTheme>
    </Box>
  );
};

export function RoomDetailsSkeleton() {
  return (
    <Box>
      <SkeletonTheme baseColor="#e5e5e5">
        <Skeleton width={100} />
        <div className="md:flex justify-between mb-3">
          <div className="description-container flex gap-x-2">
            <Skeleton width={100} />
          </div>

          <div className="options-container flex gap-x-3">
            <Skeleton width={70} />
            <Skeleton width={70} />
          </div>
        </div>
        <div className="w-full md:grid grid-cols-2 gap-x-1">
          <Skeleton width={600} height={410} />
          <div className="grid gap-x-1 gap-y-1 grid-cols-2">
            <Skeleton width={300} height={200} />
            <Skeleton width={300} height={200} />
            <Skeleton width={300} height={200} />
            <Skeleton width={300} height={200} />
          </div>
        </div>
        <div className="house-details-container mt-5">
          <Skeleton width={100} />
          <div className="house-details flex gap-x-1">
            <Skeleton width={40} />
          </div>
        </div>
      </SkeletonTheme>
    </Box>
  );
}
