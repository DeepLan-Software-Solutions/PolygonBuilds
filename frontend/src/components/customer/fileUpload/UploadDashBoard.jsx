import {
  Box,
  Typography,
  Button,
  Paper,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import BuildIcon from "@mui/icons-material/Build";
import PrintIcon from "@mui/icons-material/Print";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FileUpload from "./FileUpload";
import { useState } from "react";

function UploadDashBoard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box
        width="250px"
        bgcolor="#003366"
        color="white"
        display="flex"
        flexDirection="column"
        padding={2}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          POLYGONBUILDS NETWORK
        </Typography>
        <Typography variant="subtitle2">by polygonbuild</Typography>
        <Box marginTop={4}>
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: "#0056b3", mb: 2 }}
          >
            New Quote
          </Button>
          <Button variant="outlined" color="inherit" fullWidth sx={{ mb: 2 }}>
            Sign In
          </Button>
          <Button variant="text" color="inherit" fullWidth sx={{ mb: 2 }}>
            Help
          </Button>
          <Button variant="text" color="inherit" fullWidth>
            English
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        style={{
          display: "flex",
          width: "100%",
          height: "100vh", // Optional: Adjust height as needed
        }}
      >
        {/* Left Side */}
        <Box
          style={{
            width: "40%",
            padding: "30px 16px 16px 30px",
            borderRight: "1px solid #dbdbdb", // Separator line
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Select technology
          </Typography>

          <div style={{ width: "90%", marginBottom: "16px" }}>
            <div style={{ marginTop: "30px", marginBottom: "60px" }}>
              <Paper
                elevation={0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "16px",
                  border: "1px solid #dbdbdb",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.border = "1px solid #0078D4")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.border = "1px solid #dbdbdb")
                }
                onClick={handleDropdownOpen}
              >
                <PrintIcon fontSize="large" color="primary" />
                <Typography style={{ width: "80%" }}>
                  <Typography variant="h6" fontWeight="bold">
                    3D Printing
                  </Typography>
                  <Typography variant="body2">
                    Single cavity molds, family molds
                  </Typography>
                </Typography>
              </Paper>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleDropdownClose}
                PaperProps={{
                  style: { width: "27.5%", backgroundColor: "#f9f9f9" },
                }}
              >
                <MenuItem
                  onClick={() => {
                    console.log("SLA selected");
                    handleDropdownClose();
                  }}
                >
                  <PrintIcon sx={{ marginRight: "8px" }} color="primary" />
                  SLA
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("FDM selected");
                    handleDropdownClose();
                  }}
                >
                  <PrecisionManufacturingIcon
                    sx={{ marginRight: "8px" }}
                    color="primary"
                  />
                  FDM
                </MenuItem>
              </Menu>
              <Paper
                elevation={0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "16px",
                  border: "1px solid #dbdbdb",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  cursor: "not-allowed", // Non-clickable cursor
                  backgroundColor: "#f0f0f0", // Light gray background
                }}
                onMouseEnter={
                  (e) => (e.currentTarget.style.border = "1px solid #dbdbdb") // No border highlight on hover
                }
                onMouseLeave={
                  (e) => (e.currentTarget.style.border = "1px solid #dbdbdb") // Keep the default border
                }
              >
                <PrecisionManufacturingIcon fontSize="large" color="primary" />
                <Typography style={{ width: "80%", color: "#b0b0b0" }}>
                  {" "}
                  {/* Lighter text color */}
                  <Typography variant="h6" fontWeight="bold">
                    CNC machining
                  </Typography>
                  <Typography variant="body2">
                    Milling (3-axis, 5-axis), turning
                  </Typography>
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "16px",
                  border: "1px solid #dbdbdb",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  cursor: "not-allowed", // Non-clickable cursor
                  backgroundColor: "#f0f0f0", // Light gray background
                }}
                onMouseEnter={
                  (e) => (e.currentTarget.style.border = "1px solid #dbdbdb") // No border highlight on hover
                }
                onMouseLeave={
                  (e) => (e.currentTarget.style.border = "1px solid #dbdbdb") // Keep the default border
                }
              >
                <BuildIcon fontSize="large" color="primary" />
                <Typography style={{ width: "80%", color: "#b0b0b0" }}>
                  {" "}
                  {/* Lighter text color */}
                  <Typography variant="h6" fontWeight="bold">
                    Sheet metal
                  </Typography>
                  <Typography variant="body2">
                    Laser cutting, bending
                  </Typography>
                </Typography>
              </Paper>
            </div>
            <Paper
              elevation={0}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
                padding: "16px",
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
                marginTop: "16px",
              }}
            >
              <BusinessCenterIcon
                fontSize="large"
                color="primary"
                style={{ marginRight: "16px" }}
              />
              <Typography style={{ width: "80%" }}>
                <Typography variant="h6" fontWeight="bold">
                  Production orders
                </Typography>
                <Typography variant="body2">
                  Talk to our sales team about larger orders with more complex
                  requirements. <Link href="#">Learn more</Link>
                </Typography>
                <Link href="#" underline="hover" style={{ marginTop: "8px" }}>
                  Get started
                </Link>
              </Typography>
            </Paper>
          </div>
        </Box>

        {/* Right Side */}
        <Box
          style={{
            width: "60%",
            padding: "30px 16px 16px 16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: "90%" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Upload your CAD files to get an instant quote
            </Typography>
            <FileUpload />
            <Typography
              variant="caption"
              display="block"
              color="textSecondary"
              textAlign="center"
              marginTop={2}
            >
              Uploading weapons or parts subject to export control regulations
              such as ITAR, EAR beyond EAR99, or EU Dual Use is a violation of
              our
              <Link href="#"> terms of use</Link>.
            </Typography>
            <Typography
              variant="caption"
              display="block"
              color="textSecondary"
              textAlign="center"
              marginTop={2}
            >
              Privacy: All your files are secure with us. Read our{" "}
              <Link href="#">privacy policy</Link>.
            </Typography>

            <Box marginTop={9} textAlign="center">
              <Typography>
                Want to see how the platform works before uploading your own
                parts?
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "16px", backgroundColor: "#0056b3" }}
              >
                Learn more
              </Button>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default UploadDashBoard;
