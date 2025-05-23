import styles from './MobileLayout.module.css';

import { GrLocation } from 'react-icons/gr';
import { IoSearch } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';

import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { IoMdAddCircleOutline, IoMdAddCircle } from 'react-icons/io';
import { HiOutlineChat, HiChat } from 'react-icons/hi';
import { FaRegUser, FaUserAlt } from 'react-icons/fa';

import Link from 'next/link';
import { useRouter } from 'next/router';

function MobileLayout({ location, children }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button onClick={() => router.back()}>
          <FaArrowRight />
        </button>

        <div className={styles.mobileNav}>
          <div>
            <input type="text" placeholder="جست و جو در همه آگهی ها " />
            <IoSearch opacity="0.5" />
          </div>

          <div>
            <button>{location}</button>
            <GrLocation opacity="0.5" />
          </div>
        </div>
      </nav>

      {children}

      <footer className={styles.footer}>
        <Link href="/" className={`${router.asPath == '/' && styles.active} ${styles.links}`}>
          {router.asPath == '/' ? <AiFillHome /> : <AiOutlineHome />}
          <span>آگهی ها</span>
        </Link>

        <Link href="" className={`${router.asPath == '//' && styles.active} ${styles.links}`}>
          {router.asPath == '//' ? <FaBookmark /> : <FaRegBookmark />}
          <span>نشان ها</span>
        </Link>

        <Link href="" className={`${router.asPath == '//' && styles.active} ${styles.links}`}>
          {router.asPath == '//' ? <IoMdAddCircle /> : <IoMdAddCircleOutline />}
          <span>ثبت اگهی</span>
        </Link>

        <Link href="" className={`${router.asPath == '//' && styles.active} ${styles.links}`}>
          {router.asPath == '//' ? <HiChat /> : <HiOutlineChat />}
          <span>چت</span>
        </Link>

        <Link href="" className={`${router.asPath == '//' && styles.active} ${styles.links}`}>
          {router.asPath == '//' ? <FaUserAlt /> : <FaRegUser />}
          <span>دیوار من</span>
        </Link>
      </footer>
    </div>
  );
}

export default MobileLayout;
