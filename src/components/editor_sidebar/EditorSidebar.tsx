import React, { useState } from "react";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import "./styles.scss"; // Ensure this file contains the required styles

interface EditorSidebarProps {
  children: React.ReactNode; // Properly typing the children prop
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({ children }) => {
  const [drawerPos, setDrawerPos] = useState<number>(1);

  const handleDrawer = () => {
    setDrawerPos((prev) => (prev < 2 ? prev + 1 : 0));
  };

  const drawerClass =
    drawerPos === 1 ? "drawerMin" : drawerPos === 2 ? "drawerOpen" : "";
  const mainClass =
    drawerPos === 1 ? "mainMin" : drawerPos === 2 ? "mainOpen" : "";

  return (
    <div className="editor-layout">
      <nav className="navbar">
        <i className="material-icons menu-icon" onClick={handleDrawer} title="Toggle Drawer">
          menu
        </i>
        <h3>Editor Navbar</h3>
      </nav>
      <aside className={drawerClass}>
        <ul>
          <li>
            <DashboardSharpIcon className="menu-icon" /> {/* Directly use the icon here */}
            <span>Dashboard</span>
          </li>
          <li>
            <i className="material-icons">people</i>
            <span>Clients</span>
          </li>
          <li>
            <i className="material-icons">show_chart</i>
            <span>Sales</span>
          </li>
          <li>
            <i className="material-icons">table_chart</i>
            <span>Others</span>
          </li>
        </ul>
      </aside>
      <main className={mainClass}>{children}</main>
    </div>
  );
};

export default EditorSidebar;
