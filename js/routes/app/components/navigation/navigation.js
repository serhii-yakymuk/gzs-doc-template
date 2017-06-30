import React from 'react';

import { Link } from 'react-router-dom';

import styles from './navigation.scss';

const menuItems = [
  { link: 'project', name: 'Проект землеустрою' },
  { link: 'technical-documentation', name: 'Технічна документація' },
  { link: 'settings', name: 'Налаштування' }
];
const items = menuItems.map((item, index) => {
  return (
    <li className={styles.listItem} key={index}>
      <Link
        to={`/${item.link}`}
        id={`${item.link}-link`}
        className={`pure-menu-link ${styles.linkItem}`}
      >
        { item.name }
      </Link>
    </li>
  );
});
const Navigation = () => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.menuContainer}>
        <ul className={styles.menuList}>
          { items }
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
