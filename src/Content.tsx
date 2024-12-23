import { Box } from "@mui/material"
import { DrawerHeader } from "./Sidebar/Sidebar"
import Settings from "./Settings"
import Library from "./Library"

interface ContentProps {
  activeTab: string
}

export default function Content({activeTab}: ContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "Library":
        return <Library />
      case "Settings":
        return <Settings />
    }
  }
  
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
        {renderContent()}
    </Box>
  )
}