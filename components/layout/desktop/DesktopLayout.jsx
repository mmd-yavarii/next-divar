import Link from 'next/link';

import styles from './DesktopLayout.module.css';

import { GrLocation } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';
import { GrSupport } from 'react-icons/gr';
import { HiOutlineChat } from 'react-icons/hi';

import SearchInp from '@/components/modules/SearchInp';

function DesktopLayout({ changeProvince, location, children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div>
          <Link href={`/${location}`} className={styles.logo}>
            <img src="../textLogo.svg" width="50px" alt="" />
          </Link>

          <button onClick={changeProvince} className={styles.buttons}>
            <GrLocation opacity="0.5" />
            <p>{location}</p>
          </button>

          <Link href="" className={styles.buttons}>
            <FaRegUser opacity="0.5" />
            <p>دیوار من</p>
          </Link>

          <div className={styles.search}>
            <SearchInp />
          </div>
        </div>

        <div>
          <Link href="" className={styles.buttons}>
            <HiOutlineChat opacity="0.5" />
            <p>چت</p>
          </Link>

          <Link href="" className={styles.buttons}>
            <GrSupport opacity="0.5" />
            <p>پشتیبانی</p>
          </Link>

          <Link href="" className={styles.addNew}>
            ثبت آگهی
          </Link>
        </div>
      </nav>

      {children}
    </div>
  );
}

export default DesktopLayout;
