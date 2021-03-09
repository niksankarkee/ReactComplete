import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className='header'>
      <div className='logo'>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetup</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className='badge'>{favoriteCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
