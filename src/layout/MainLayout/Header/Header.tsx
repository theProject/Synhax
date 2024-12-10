import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useLayoutContext } from "@/contexts/LayoutContext";
import useIsMobile from "@/hooks/useIsMobile";
import { SIDEBAR_WIDTH } from "../constants";
import Breadcrumbs from "./Breadcrumbs";
import { ThemeSwitcher } from "@/contexts/ThemeSwitcher"; // Import your ThemeSwitcher

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
                <div style={{ marginLeft: "auto" }}>
                    <ThemeSwitcher />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
