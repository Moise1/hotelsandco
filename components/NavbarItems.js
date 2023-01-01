import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NavbarItems({ navbar }) {
  return (
    <div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          <li className="text-black">
            <Link href="/homes" legacyBehavior>
              <a className="font-bold bg-white hover:rounded-full hover:bg-neutral-100 p-3">
                Airbnb your home
              </a>
            </Link>
          </li>
          <li className="text-black">
            <div className="hover:rounded-full hover:bg-neutral-100 p-3">
              <Icon
                icon="ph:globe"
                className="cursor-pointer"
                height="20"
                width="20"
              />
            </div>
          </li>
          <li className="text-black">
            <div className="account-container flex gap-x-2 border border-slate-200 rounded-full cursor-pointer p-2 hover:shadow hover:transition-shadow">
              <Icon icon="ic:outline-menu" height="20" width="20" />
              <Icon icon="healthicons:ui-user-profile" height="20" width="20" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
