import Header from "../components/Header";
import Navbar from "../components/Navbar";
import feat1 from "../assets/feat1.jpg";
import feat2 from "../assets/feat2.png";
import feat3 from "../assets/feat3.svg";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FeatureSection from "../components/FeatureSection";
import DevelopersSection from "../components/DevelopersSection";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <FeatureSection
        title="One-on-one live mentorship"
        items={[
          {
            text: "Debug with the help of an expert",
            icon: <BugReportIcon sx={{ color: "#72a7d1" }} />,
          },
          {
            text: "Personalize your learning experience",
            icon: <PersonIcon sx={{ color: "#72a7d1" }} />,
          },
          {
            text: "Get answers to complex problems",
            icon: <BadgeIcon sx={{ color: "#72a7d1" }} />,
          },
        ]}
        image={feat1}
        reverse={false}
      ></FeatureSection>
      <FeatureSection
        title="Project-based freelance work"
        items={[
          {
            text: "Find experts for on-demand code-review",
            icon: <CodeIcon sx={{ color: "#72a7d1" }} />,
          },
          {
            text: "Build features for your existing product",
            icon: <BuildIcon sx={{ color: "#72a7d1" }} />,
          },
          {
            text: "Turn your idea into an MVP",
            icon: <RocketLaunchIcon sx={{ color: "#72a7d1" }} />,
          },
        ]}
        image={feat2}
        reverse={true}
      >
        Find a Freelancer
      </FeatureSection>
      <FeatureSection
        title="Hiring for a bigger project?"
        items={[
          {
            text: "Arc helps you find a senior developers for both permanent full-time roles and 40+hour contract projects",
          },
          {
            text: (
              <a
                href="https://arc.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#72a7d1",
                }}
              >
                visit Arc to learn more{" "}
                <ArrowForwardIcon sx={{ marginLeft: 1 }} />{" "}
              </a>
            ),
          },
        ]}
        image={feat3}
        reverse={true}
      ></FeatureSection>
      <DevelopersSection></DevelopersSection>
      <Footer></Footer>
      {/* <h2>Get help from vetted software developers</h2> */}
    </>
  );
}
