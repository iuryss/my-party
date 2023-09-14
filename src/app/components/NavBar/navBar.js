import React from 'react';
import styles from '../../styles/navBar.module.css'
import Button from '../Button/button';

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.leftItems}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.navItem}>Eventos</div>
        <div className={styles.navItem}>Organize</div>
      </div>
      <Button padding={"0.6em 2.4em"} buttonText={'Entrar'} radius={"20px"} />
    </nav>
  );
};

export default Navbar;