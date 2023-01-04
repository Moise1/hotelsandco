import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {Fragment} from 'react';

function Box({ children }) {
  return (
    <div className="grid gap-x-8 gap-y-4 grid-cols-4">
      {children}
    </div>
  );
}

export function NavbarSkeleton() {
  return (
    <SkeletonTheme baseColor="#e5e5e5">
      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block mt-5">
            <Skeleton width={200}/>
          </div>
          <Skeleton width={350} height={50}/>
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


export function RoomsSkeleton() {
  return (
    <Box>
      <SkeletonTheme baseColor="#e5e5e5">
        {Array.from('x'.repeat(8)).map((item, idx) => (
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
}
