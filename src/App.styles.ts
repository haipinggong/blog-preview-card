import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  card: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    gap: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    border: `1px solid ${theme.palette.grey[950]}`,
    width: "100%",
    maxWidth: "20.4375rem",
    boxShadow: `8px 8px 0px ${theme.palette.common.black}`,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "24rem",
    },
  }),
  image: {
    borderRadius: "10px",
  },
  category: (theme) => ({
    padding: theme.spacing(0.5, 1.5, 0.5, 1.5),
    alignSelf: "flex-start",
  }),
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
  title: (theme) => ({
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  }),
  description: (theme) => ({
    color: theme.palette.grey[500],
  }),
  footer: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },
  authorName: (theme) => ({
    fontWeight: theme.typography.fontWeightExtraBold,
  }),
};

export default styles;
