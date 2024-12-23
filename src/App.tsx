import { useState } from 'react';
import {Box, ThemeProvider, CssBaseline} from '@mui/material';

import { appTheme } from './Theme';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("Home");

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Content activeTab={activeTab}/>
      </Box>
    </ThemeProvider>
  )
}