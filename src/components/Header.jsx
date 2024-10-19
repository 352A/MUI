import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import hero from "../assets/hero.png";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #002a36, #004d57, #006080)",
        textAlign: "center",
        position: "relative",
        width: "100%",
        paddingTop: "10rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 600,
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#ffffff",
        }}
      >
        Find a developer for live mentorship & freelance projects
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginBottom: 3,
          backgroundColor: "#f5945c",
          padding: "10px 20px",
          fontWeight: 500,
        }}
      >
        GET HELP NOW
      </Button>
      <img
        src={hero}
        alt="Placeholder"
        style={{
          width: "40rem",
          height: "auto",
        }}
      />
    </Box>
  );
}
