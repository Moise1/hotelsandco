import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function NavbarSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Skeleton/>
          </div>
          <Skeleton width={50} />
          <Skeleton width={100} height={40}/>
        </div>
      </nav>

      <nav className="w-full bg-white shadwo">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="grid justify-items-center gap-y-2 hover:border-b-2 border-gray-400 mb-0">
            <Skeleton className="rounded-full"/>
            <Skeleton/>
          </div>
        </div>
      </nav>
    </SkeletonTheme>
  );
}
