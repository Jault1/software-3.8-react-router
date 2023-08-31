import styles from './View.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { getProductList } from '../data';
import { useEffect, useState } from 'react';

function View({ list }) {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <h2>View</h2>
        <nav className={styles.nav}>
          {list.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
              to={`/view/${item.id}`}
              key={item.id}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default View;
