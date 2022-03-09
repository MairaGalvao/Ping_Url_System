import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PingFormMain from "./Ping/PingFormMain";
import PingResultsMain from "./Ping/PingResultsMain";
import { StyledEngineProvider } from "@mui/material/styles";
import * as Mui from "@material-ui/core";

ReactDOM.render(
	<React.StrictMode>
		<PingFormMain />,
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
