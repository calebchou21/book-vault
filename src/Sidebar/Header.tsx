import { AppBar, AppBarProps, Toolbar, Typography, IconButton, styled } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

import { DRAWER_WIDTH } from "./Sidebar";
import { StateSetter } from "../Types";

interface HeaderProps {
  open: boolean,
  activeTab: string,
  setOpen: StateSetter<boolean>
}

interface StyledAppBarProps extends AppBarProps {
  open: boolean,
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<StyledAppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        
      },
    },
  ],
}));

export default function Header({open, setOpen, activeTab}: HeaderProps) {
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: 'none' },
          ]}
        >
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {activeTab}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  )
}