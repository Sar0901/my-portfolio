import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f172a" // dark blue
    },
    secondary: {
      main: "#3b82f6" // blue accent
    }
  },

  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 600
    }
  }
});

export default theme;