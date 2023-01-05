import { Icon } from "@iconify/react";
import styles from '../styles/Searchbar.module.css';

export default function SearchBar() {
  return (
    <div className="grid grid-cols-3  rounded-full border-inherit shadow-lg border border-slate-200 py-3 px-4">
      <button className="font-bold">Anywhere</button>
      <button className="font-bold">Any week</button>
      <div className="flex items-center gap-x-3">
        <button className="text-gray-400 ml-2">Add guests</button>
        <div className={styles.searchIconContainer}>
          <Icon icon="material-symbols:search" width="18" height="18" className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
