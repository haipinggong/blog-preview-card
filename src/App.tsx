import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import styles from "./App.styles";
import illustrationArticle from "./assets/images/illustration-article.svg";
import avatarImage from "./assets/images/image-avatar.webp";

function App() {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.card} component="main">
        <Box
          component="img"
          src={illustrationArticle}
          alt="Illustration article"
          sx={styles.image}
        ></Box>
        <Box component="article" sx={styles.content}>
          <Button sx={styles.category} variant="contained" disableElevation>
            Learning
          </Button>
          <Typography variant="body2">Published 21 Dec 2023</Typography>
          <Typography variant="h1" sx={styles.title}>
            HTML & CSS foundations
          </Typography>
          <Typography sx={styles.description}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </Typography>
        </Box>
        <Box sx={styles.footer}>
          <Avatar alt="Greg Hooper" src={avatarImage} />
          <Typography sx={styles.authorName} variant="caption">
            Greg Hooper
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
