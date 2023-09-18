import React from 'react';
import styles from '../../styles/navBar.module.css'
import Button from '../Button/button';

const Navbar = (props) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.leftItems}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.navItem}>{props.navFirst}</div>
        <div className={styles.navItem}>{props.navSecond}</div>
        <div className={styles.navItem}>{props.navThird}</div>
      </div>
      <Button padding={"0.6em 2.4em"} buttonText={'Entrar'} radius={"20px"} />
    </nav>
  );
};

export default Navbar;