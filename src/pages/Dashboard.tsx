import { Box, Typography, Button } from "@mui/material";
import {
  CloudUpload,
  Palette,
  AccountCircle,
} from "@mui/icons-material"; // MUI Icons
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Box className="dashboard-container">
      {/* Main Content */}
      <Box className="main-content">
        {/* Row 1: Project Cards */}
        <Box className="card-row">
          {[1, 2, 3].map((project) => (
            <Box className="dashboard-card" key={project}>
              <img
                src={`https://via.placeholder.com/150?text=Project+${project}`}
                alt={`Project ${project}`}
                className="card-image"
              />
              <Typography className="card-title">Project {project}</Typography>
              <Button variant="contained" className="card-button">
                Open
              </Button>
            </Box>
          ))}
        </Box>

        {/* Separator */}
        <Box className="separator" />

        {/* Row 2: Tools and Community */}
        <Box className="card-row">
          {/* The Forge Card */}
          <Box className="dashboard-card forge-card">
            <CloudUpload className="forge-icon" />
            <Palette className="forge-icon" />
            <Typography className="card-title">The Forge</Typography>
          </Box>

          {/* Top Asset Producers */}
          <Box className="dashboard-card">
            <Typography className="card-title">Top Asset Producers</Typography>
            <Typography className="asset-producer">
              <AccountCircle /> John Doe - 3D
            </Typography>
            <Typography className="asset-producer">
              <AccountCircle /> Jane Smith - Music
            </Typography>
          </Box>
        </Box>

        {/* Separator */}
        <Box className="separator" />

        {/* Row 3: Profile Summary */}
        <Box className="profile-summary-card">
          <AccountCircle className="profile-icon" />
          <Typography className="profile-metrics">
            Mentor Validations: 12 | Credits Earned: 50
          </Typography>
          <Box className="language-bars">
            <Typography>JavaScript</Typography>
            <Typography>Python</Typography>
          </Box>
          <Box className="profile-buttons">
            <Button variant="contained" color="primary">
              View Profile
            </Button>
            <Button variant="contained">Add Project</Button>
            <Button variant="contained">Edit Project</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
