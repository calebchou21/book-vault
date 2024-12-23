import { SvgIconComponent } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import { StateSetter } from "../Types";

export type TabOption = {
  label: string,
  icon: SvgIconComponent,
}

const SidebarElementButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'open',
  })<{open: boolean}>(({ open }) => ({
    minHeight: 48,
    px: 2.5,
    justifyContent: open ? 'initial' : 'center',
}));

const SidebarElementIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'open',
  })<{open: boolean}>(({ open }) => ({
    minWidth: 0,
    justifyContent: 'center',
    mr: open ? 3 : 'auto'
}));

interface SidebarElementProps {
  tab: TabOption,
  open: boolean,
  activeTab: string,
  setActiveTab: StateSetter<string>
}

export default function SidebarElement({tab, open, activeTab, setActiveTab}: SidebarElementProps) {
  const handleElementClick = () => {
    setActiveTab(tab.label);
  } 

  return (
    <ListItem disablePadding>
      <SidebarElementButton 
        open={open}
        onClick={handleElementClick}
        selected={activeTab===tab.label}
      >
        <SidebarElementIcon open={open}>
          <tab.icon />
        </SidebarElementIcon>
        <ListItemText
            primary={tab.label}
            slotProps={{
              primary: {
                style: {
                  fontWeight: activeTab === tab.label ? 'bold' : 'normal',
                  marginTop: '4px',
                  marginLeft: '10px',
                  opacity: open ? 1 : 0,
                },
              },
            }}
          />
      </SidebarElementButton>
    </ListItem>
  )
}