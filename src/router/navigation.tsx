import DashboardIcon from "@mui/icons-material/Dashboard";
import DnsIcon from "@mui/icons-material/Dns";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { DeblurSharp, FolderZipSharp, DataSaverOnSharp } from "@mui/icons-material";

// Define the type structure for the navigation
interface NavigationLink {
    path?: string;
    title: string;
    icon: JSX.Element;
    children?: NavigationLink[];
}

interface NavigationSection {
    title: string;
    links: NavigationLink[];
}

// Navigation structure
const navigation: NavigationSection[] = [
    {
        title: "Main",
        links: [
            {
                path: "/",
                title: "Dashboard",
                icon: <DashboardIcon />,
            },
            {
                title: "Settings",
                path: "/settings",
                icon: <SettingsIcon />,
                children: [
                    {
                        path: "/settings/users",
                        title: "Users",
                        icon: <PeopleIcon />,
                    },
                    {
                        path: "/settings/system",
                        title: "System",
                        icon: <DnsIcon />,
                    },
                ],
            },
            {
                title: "Project Synhax",
                icon: <DeblurSharp />,
                children: [
                    {
                        title: "New Synhax",
                        path: "/projects/project1",
                        icon: <DataSaverOnSharp />,
                    },
                    {
                        title: "Open Synhax",
                        path: "/projects/project2",
                        icon: <FolderZipSharp />,
                    },
                ],
            },
        ],
    },
    {
        title: "Info",
        links: [
            {
                path: "/about",
                title: "About",
                icon: <InfoIcon />,
            },
        ],
    },
];

export default navigation;
