import React from 'react';
import { useTheme } from '../ThemeContext';
import { Switch, FormControlLabel } from '@mui/material';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <FormControlLabel
      control={<Switch checked={theme === 'dark'} onChange={toggleTheme} />}
      label="Toggle Theme"
    />
  );
};

export default ThemeToggle;
