import ReactDOM from "react-dom/client";
import App from "./App";
import Backendless from "backendless";

import { APP_ID, API_KEY } from "./configs/backendless";

Backendless.initApp(APP_ID, API_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
