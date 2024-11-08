// src/components/Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import '../styles/Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search}`); // Use navigate instead of history.push
    }
  };

  return (
    <nav className="navbar">
      <h2>Movie Panel</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search Movies..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
