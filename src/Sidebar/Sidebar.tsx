import { useState } from "react";
import { styled, Drawer, Theme, List, IconButton, Divider } from "@mui/material";
import { MenuBookOutlined,
    CalendarMonthOutlined, 
    ChevronLeftOutlined,
    AssessmentOutlined } from "@mui/icons-material";

import SidebarElement from "./SidebarElement";
import Header from "./Header";
import { TabOption } from "./SidebarElement";
import { StateSetter } from "../Types";

export const DRAWER_WIDTH = 240;

const sidebarTabs: TabOption[] = [
  {label: "Library", icon: MenuBookOutlined},
  {label: "Logs", icon: CalendarMonthOutlined},
  {label: "Statistics", icon: AssessmentOutlined},
]

const openedMixin = (theme: Theme) => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
  
const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(Drawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme}) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  })
)

interface SidebarProps {
  activeTab: string,
  setActiveTab: StateSetter<string>
}

export default function Sidebar({activeTab, setActiveTab}: SidebarProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header open={open} setOpen={setOpen} activeTab={activeTab}/>
      <StyledDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftOutlined />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarTabs.map((tab) => (
            <SidebarElement 
              key={tab.label}
              open={open} 
              tab={tab} 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </List>
      </StyledDrawer>
    </>
  )
}