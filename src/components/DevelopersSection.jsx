import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";

function AvatarCard({ imgSrc, developerName, jobTitle }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        padding: 1,
      }}
    >
      <Avatar
        alt={developerName}
        src={imgSrc}
        sx={{ width: 80, height: 80, marginRight: 2 }}
      />
      <CardContent sx={{ flex: "1", paddingLeft: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {developerName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {jobTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function DevelopersSection() {
  const cards = [
    {
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      developerName: "John Doe",
      jobTitle: "Frontend Developer",
    },

    {
      imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
      developerName: "Mike Johnson",
      jobTitle: "Full Stack Developer",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
      developerName: "Jane Smith",
      jobTitle: "Backend Developer",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
      developerName: "Sarah Williams",
      jobTitle: "Mobile Developer",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
      developerName: "Tom Brown",
      jobTitle: "Data Scientist",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
      developerName: "Emily Davis",
      jobTitle: "DevOps Engineer",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 220px",
        background: "linear-gradient(to right, #003C50, #005976, #006080)",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        marginBottom={4}
        color="white"
        sx={{ fontWeight: 700 }}
      >
        Connect with 1200+ top developers anytime
      </Typography>

      <Grid container spacing={10} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AvatarCard {...card} />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h6"
        textAlign="center"
        marginBottom={4}
        marginTop={6}
        color="white"
      >
        Start working with our developers
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#f5945c",
          boxShadow: "none",
          "&:hover": { backgroundColor: "#f57b42" },
          width: "20%",
          marginX: "auto",
        }}
      >
        Get started
      </Button>
    </Box>
  );
}
