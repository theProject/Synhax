import MenuIcon from "@mui/icons-material/Menu";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useLayoutContext } from "@/contexts/useLayoutContext"; // Correct import
import useIsMobile from "@/hooks/useIsMobile";
import { SIDEBAR_WIDTH } from "../constants";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { ThemeSwitcher } from "@/contexts/ThemeSwitcher";
import "./Header.css";

const Header = ({ generateOutput }: { generateOutput: () => void }) => {
    const { sidebarOpen, setSidebarOpen } = useLayoutContext();
    const isMobile = useIsMobile();
    const [toolbarText, setToolbarText] = useState("Home");

    const handleDrawerToggle = () => {
        setSidebarOpen((current: boolean) => !current); // Explicitly type `current`
    };

    const toggleToolbar = () => {
        setToolbarText((prev) => (prev === "Home" ? "Synhax Panel" : "Home"));
    };

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                width: `calc(100% - ${
                    sidebarOpen && !isMobile ? SIDEBAR_WIDTH : 0
                }px)`,
                backgroundColor: "background.default",
                color: "text.primary",
            }}
        >
            <Toolbar>
                {/* Sidebar Hamburger Icon */}
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
                <Box sx={{ color: "text.primary" }}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
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
                </Box>

                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        textAlign: "center",
                    }}
                >
                    {toolbarText}
                </Typography>

                {/* Dynamic Icons */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                        color="inherit"
                        aria-label="run app"
                        onClick={generateOutput}
                    >
                        <PlayArrowIcon />
                    </IconButton>
                    <ThemeSwitcher />
                    <IconButton
                        color="inherit"
                        aria-label="swap toolbar mode"
                        edge="end"
                        onClick={toggleToolbar}
                    >
                        <SwapHorizIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
