import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// "testimonials": {
//   "testimonials": [
//     {
//       "text": "Sonny is absolutely excellent, his depth of knowledge & his mentorship really meant a lot to us... I would definitely recommend",
//       "user": "Jorge Fouto"
//     },
//     {
//       "text": "Learning with Sonny has been AWESOME, he makes learning React so easy and approachable, you'll finally feel like you know what's going on!",
//       "user": "Adam Curtis"
//     }
//   ]
// }
