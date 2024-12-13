import MenuIcon from "@mui/icons-material/Menu";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"; // Import SwapHorizIcon
import { AppBar, IconButton, Toolbar, Box } from "@mui/material";
import { useLayoutContext } from "@/contexts/LayoutContext";
import useIsMobile from "@/hooks/useIsMobile";
import { SIDEBAR_WIDTH } from "../constants";
import Breadcrumbs from "./Breadcrumbs";
import { ThemeSwitcher } from "@/contexts/ThemeSwitcher"; // Import your ThemeSwitcher
import "./Header.css"; // Ensure your existing styles are intact

const Header = () => {
    const { sidebarOpen, setSidebarOpen } = useLayoutContext();
    const isMobile = useIsMobile();

    const handleDrawerToggle = () => {
        setSidebarOpen((current) => !current);
    };

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                width: `calc(100% - ${
                    sidebarOpen && !isMobile ? SIDEBAR_WIDTH : 0
                }px)`,
                background: "linear-gradient(to right, #3299cc, #323366)", // Updated gradient
                transition: (theme) =>
                    theme.transitions.create(["width"], {
                        easing: sidebarOpen
                            ? theme.transitions.easing.easeOut
                            : theme.transitions.easing.sharp,
                        duration: sidebarOpen
                            ? theme.transitions.duration.enteringScreen
                            : theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <Toolbar>
                {/* Drawer toggle button */}
                <IconButton
                    color="inherit"
                    aria-label="toggle drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Breadcrumbs */}
                <Breadcrumbs />

                {/* Theme toggle button */}
                <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                    {/* ThemeSwitcher */}
                    <ThemeSwitcher />

                    {/* SwapHorizIcon */}
                    <IconButton
                        color="inherit"
                        aria-label="swap toolbar mode"
                        edge="end"
                    >
                        <SwapHorizIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
