import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2926ca", // dark Color
    },
    secondary: {
      main: "#fbaf1a", // BLACK COLOR
    },
    tertiary: {
      main: "#d9d9d9", // GREEN COLOR
    },
    accent:{
        white: "#ffffff",
        black: "#000000"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Roboto Serif",
    fontWeightBold: "700",
    fontWeightSemiBold: "600",
    fontWeightMedium: "500",
    fontWeightRegular: "400"
  },
});

export default theme;