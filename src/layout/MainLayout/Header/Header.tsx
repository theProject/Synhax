import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt"; // Layout icon
import { AppBar, IconButton, Toolbar, Typography, Box, Menu, MenuItem } from "@mui/material";
import { useLayoutContext } from "@/contexts/useLayoutContext";
import useIsMobile from "@/hooks/useIsMobile";
import { SIDEBAR_WIDTH } from "../constants";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { ThemeSwitcher } from "@/contexts/ThemeSwitcher";

const Header = ({ generateOutput, onChangeLayout }: { generateOutput: () => void; onChangeLayout: (layout: string) => void }) => {
    const { sidebarOpen, setSidebarOpen } = useLayoutContext();
    const isMobile = useIsMobile();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleDrawerToggle = () => {
        setSidebarOpen((current: boolean) => !current);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLayoutChange = (layout: string) => {
        onChangeLayout(layout);
        setAnchorEl(null);
    };

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                width: `calc(100% - ${sidebarOpen && !isMobile ? SIDEBAR_WIDTH : 0}px)`,
                backgroundColor: "background.default",
                color: "text.primary",
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="toggle drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Breadcrumbs sx={{ color: "text.primary", flexGrow: 1 }}>
                    <Typography variant="body1" color="inherit">
                        Home
                    </Typography>
                    <Typography variant="body1" color="inherit">
                        Dashboard
                    </Typography>
                    <Typography variant="body1" color="inherit">
                        Current
                    </Typography>
                </Breadcrumbs>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton color="inherit" onClick={generateOutput}>
                        <SwapHorizIcon />
                    </IconButton>

                    {/* Layout Change Icon */}
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <ViewQuiltIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={() => handleLayoutChange("default")}>Editors Top, Output Bottom</MenuItem>
                        <MenuItem onClick={() => handleLayoutChange("left")}>Editors Left, Output Right</MenuItem>
                        <MenuItem onClick={() => handleLayoutChange("right")}>Editors Right, Output Left</MenuItem>
                    </Menu>

                    <ThemeSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
