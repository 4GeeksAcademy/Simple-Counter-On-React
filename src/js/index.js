//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//font awesome icons
import '@fortawesome/fontawesome-free/css/all.min.css';

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
