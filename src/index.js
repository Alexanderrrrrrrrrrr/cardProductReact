import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import App from "./app/app";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />,
    </ThemeProvider>,
    rootElement
);
