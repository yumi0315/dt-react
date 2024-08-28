import React from "react";
import ReactDOM from "react-dom/client"; // React.js client Next.js/server
// import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode : 개발단계에서 로그, 문법체크 지원
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
