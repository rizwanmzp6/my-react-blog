import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './nav-styles.css';

export default function Nav({ initialPosts, posts, setPosts }) {
  const [search, setSearch] = useState('');
  const history = useHistory();

  function filterPosts(searchTerm) {
    if (searchTerm.trim() === '') {
      setPosts(initialPosts);
    } else {
      const filteredPosts = posts.filter(
        (x) =>
          x.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          x.tags.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  }

  useEffect(() => {
    filterPosts(search);
  }, [search]);

  function resetSearchbar() {
    let searchBar = document.getElementById('searchInput');
    searchBar.value = null;
    setSearch('');
  }

  function readyToSearch() {
    history.push('/');
  }

  return (
    <nav>
      <div>
        <img
          src='https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg'
          alt=''
        />
        <ul>
          <li>
            <Link className='navbar' onClick={resetSearchbar} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='navbar' onClick={resetSearchbar} to='/newpost'>
              New post
            </Link>
          </li>
          <li>
            <label htmlFor='search'>Search for post / Enter Category :</label>
            <input
              id='searchInput'
              type='text'
              onChange={(e) => setSearch(e.target.value)}
              onClick={readyToSearch}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
