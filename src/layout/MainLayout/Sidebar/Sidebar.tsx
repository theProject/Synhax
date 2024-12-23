import { Fragment, useEffect } from "react";
import { Box, Divider, Drawer, List } from "@mui/material";
import { useLayoutContext } from "@/contexts/useLayoutContext";
import useIsMobile from "@/hooks/useIsMobile";
import navigation from "@/router/navigation";
import { SIDEBAR_WIDTH } from "../constants";
import SidebarLink from "./SidebarLink";
import SidebarSubmenu from "./SidebarSubmenu";
import SynhaxLogo from "@/styles/components/SynhaxLogo"; // Import your logo component

const Sidebar = () => {
    const isMobile = useIsMobile();
    const { sidebarOpen, setSidebarOpen } = useLayoutContext();

    function handleClose() {
        setSidebarOpen(false);
    }

    useEffect(() => {
        setSidebarOpen(!isMobile);
    }, [isMobile, setSidebarOpen]);

    return (
        <Drawer
            variant={isMobile ? "temporary" : "persistent"}
            open={sidebarOpen}
            onClose={handleClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: SIDEBAR_WIDTH,
                },
            }}
        >
            <Box>
                {/* Add your logo */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 1.5,
                    }}
                >
                    <SynhaxLogo />
                </Box>

                {/* Navigation links */}
                {navigation.map((section) => (
                    <Fragment key={section.title}>
                        <Divider />
                        <List>
                            {section.links.map((link) =>
                                link.children ? (
                                    <SidebarSubmenu
                                        key={link.title}
                                        text={link.title}
                                        icon={link.icon}
                                    >
                                        <List>
                                            {link.children.map((nestedLink) =>
                                                nestedLink.path ? (
                                                    <SidebarLink
                                                        key={nestedLink.path}
                                                        to={nestedLink.path || "#"} // Default to "#" if undefined
                                                        text={nestedLink.title}
                                                        icon={nestedLink.icon}
                                                    />
                                                ) : null
                                            )}
                                        </List>
                                    </SidebarSubmenu>
                                ) : link.path ? (
                                    <SidebarLink
                                        key={link.path}
                                        to={link.path || "#"} // Default to "#" if undefined
                                        text={link.title}
                                        icon={link.icon}
                                    />
                                ) : null
                            )}
                        </List>
                    </Fragment>
                ))}
            </Box>
        </Drawer>
    );
};

export default Sidebar;
