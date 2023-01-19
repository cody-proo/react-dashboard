import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./cores/GlobalStyle";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <GlobalStyle />
  </>
);
