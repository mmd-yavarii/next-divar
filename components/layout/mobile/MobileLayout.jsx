import styles from './MobileLayout.module.css';

import { GrLocation } from 'react-icons/gr';
import { FaArrowRight } from 'react-icons/fa';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { IoMdAddCircleOutline, IoMdAddCircle } from 'react-icons/io';
import { HiOutlineChat, HiChat } from 'react-icons/hi';
import { FaRegUser, FaUserAlt } from 'react-icons/fa';

import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchInp from '@/components/modules/SearchInp';

function MobileLayout({ changeProvince, location, children }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button onClick={() => router.back()}>
          <FaArrowRight />
        </button>

        <div className={styles.mobileNav}>
          <SearchInp />

          <div onClick={changeProvince}>
            <button>{location}</button>
            <GrLocation opacity="0.5" />
          </div>
        </div>
      </nav>

      {children}

      <footer className={styles.footer}>
        <Link href="/" className={`${path == '/[...productList]' && styles.active} ${styles.links}`}>
          {path == '/' ? <AiFillHome /> : <AiOutlineHome />}
          <span>آگهی ها</span>
        </Link>

        <Link href="" className={`${path == '//' && styles.active} ${styles.links}`}>
          {path == '//' ? <FaBookmark /> : <FaRegBookmark />}
          <span>نشان ها</span>
        </Link>

        <Link href="" className={`${path == '//' && styles.active} ${styles.links}`}>
          {path == '//' ? <IoMdAddCircle /> : <IoMdAddCircleOutline />}
          <span>ثبت اگهی</span>
        </Link>

        <Link href="" className={`${path == '//' && styles.active} ${styles.links}`}>
          {path == '//' ? <HiChat /> : <HiOutlineChat />}
          <span>چت</span>
        </Link>

        <Link href="" className={`${path == '//' && styles.active} ${styles.links}`}>
          {path == '//' ? <FaUserAlt /> : <FaRegUser />}
          <span>دیوار من</span>
        </Link>
      </footer>
    </div>
  );
}

export default MobileLayout;
