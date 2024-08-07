import React from 'react';
import { useTheme } from '../ThemeContext';
import { Switch, FormControlLabel } from '@mui/material';
import { WbSunny, NightsStay } from '@mui/icons-material';


const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();

  return (

    <FormControlLabel
      control={<Switch checked={theme === 'dark'} onChange={toggleTheme} />}
      // control={theme === 'dark' ? <NightsStay /> : <WbSunny/> onChange={toggleTheme} }

      label={theme === 'dark' ? <NightsStay /> : <WbSunny />}
    />



  );
};

export default ThemeToggle;


// import React from 'react';
// import { useTheme } from '../ThemeContext';
// import { Switch, FormControlLabel, IconButton } from '@mui/material';
// import { WbSunny, NightsStay } from '@mui/icons-material';

// const ThemeToggle = () => {
//   const { toggleTheme, theme } = useTheme();

//   return (
//     <FormControlLabel
//       control={
//         <IconButton onClick={toggleTheme}>
//           {theme === 'dark' ? <NightsStay /> : <WbSunny />}
//         </IconButton>
//       }
//       label=""
//     />
//   );
// };

// export default ThemeToggle;
