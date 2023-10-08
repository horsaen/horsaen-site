'use client';
import { useState, useEffect } from 'react';
import styles from './Sidebar.module.css'

import { BsArrowUpSquare } from 'react-icons/bs';

const NotificationCard = ({ isVisible, onClose }) => {
  return (
    <div className={`${styles['notification-card']} ${isVisible ? styles.visible : ''}`}>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
      <span>{`the name horsaën comes from the French spelling of the English pronounciation of the Norman word 'horsain', meaning outsider :)`}</span>
    </div>
  );
};

export default function Sidebar() {

  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const hideNotification = () => {
    setIsNotificationVisible(false);
  };

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.buttons}>
        {scrollY > 500 ? <button className={styles.button} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BsArrowUpSquare /></button> : null}
      </div>
      <div className={styles.text}>
        <span onClick={()=>setIsNotificationVisible(true)}>{`[HORSAËN]`}</span>
        <NotificationCard isVisible={isNotificationVisible} onClose={hideNotification} />
      </div>
    </div>
  )
}