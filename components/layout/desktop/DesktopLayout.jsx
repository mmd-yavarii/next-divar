import styles from './DesktopLayout.module.css';

function DesktopLayout({ location, children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1>hello</h1>
      </nav>

      {children}
    </div>
  );
}

export default DesktopLayout;
