import styles from '@/styles/SearchInp.module.css';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

function SearchInp() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <input type="text" placeholder="جست و جو در همه آگهی ها" onClick={() => setIsSearching(true)} />
        <IoSearch opacity="0.5" size="1.1rem" />
      </div>
    </>
  );
}

export default SearchInp;
