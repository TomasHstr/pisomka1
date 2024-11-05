import React from 'react';
import { useState, useEffect } from 'react';

interface NavBarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onRegister: () => void;
  onLogOff: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, onLogin, onRegister, onLogOff }) => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>My App</h2>
      <div style={styles.navButtons}>
        {isLoggedIn ? (
          <button onClick={onLogOff} style={styles.button}>LogOff</button>
        ) : (
          <>
            <button onClick={onLogin} style={styles.button}>Login</button>
            <button onClick={onRegister} style={styles.button}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff'
  },
  title: {
    fontSize: '1.5rem'
  },
  navButtons: {
    display: 'flex',
    gap: '1rem'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff'
  }
};

export default NavBar;
