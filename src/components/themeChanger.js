import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          
          <i className="gg-sun"></i>
          <i className="gg-moon"></i>
        </div>
      </label>
    )}
  </ThemeToggler>
)
