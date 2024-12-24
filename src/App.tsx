import { useState } from 'react';
import {Box, ThemeProvider, CssBaseline} from '@mui/material';

import { lightTheme, darkTheme } from './Theme';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content';

import usePreferredColorScheme from './hooks/usePreferedColorScheme';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("Library");
  const preferredTheme = usePreferredColorScheme();
  const theme = preferredTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Content activeTab={activeTab}/>
      </Box>
    </ThemeProvider>
  )
}