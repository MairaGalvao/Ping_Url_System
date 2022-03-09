import React, { useState, useEffect } from "react";
import PingResultsMain from "./PingResultsMain";
import "./style-ping.css";
import * as Mui from "@material-ui/core";

function PingFormMain() {
	const [userUrl, setUserUrl] = useState();
	const [pingData, setPingData] = useState();
	const [urlData, setUrlData] = useState([]);
	const [packetCount, setPacketCount] = useState(1);

	function triggerPing() {
		fetch("/api", {
			method: "POST",
			headers: {
				"Content-type": "aplication/json",
				url: userUrl,
				packets: packetCount,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setPingData(data.pingData);
				setUrlData(data.urlData);
			});
	}

	return (
		<>
			{" "}
			<Mui.Box class="pingMain">
				<Mui.Typography
					variant="h3"
					style={{ fontWeight: "bold", padding: "5px" }}
				>
					Ping form
				</Mui.Typography>
				<Mui.Box className="buttons">
					<Mui.TextField
						value={userUrl}
						onChange={(event) => setUserUrl(event.target.value)}
						id="outlined-basic"
						label="Url's to ping"
						variant="outlined"
					/>
					<Mui.Button
						style={{ fontWeight: "bold" }}
						variant="outlined"
						onClick={triggerPing}
					>
						Run
					</Mui.Button>
					<Mui.Button
						style={{ color: "red", fontWeight: "bold" }}
						onClick={() => setUserUrl(() => "")}
						variant="outlined"
					>
						Delete url
					</Mui.Button>
				</Mui.Box>
				<Mui.Box className="counter">
					{" "}
					<Mui.Typography
						variant="h3"
						style={{ fontWeight: "bold" }}
						class="loader"
					>
						{" "}
						Count: {packetCount}
					</Mui.Typography>{" "}
					<Mui.Slider
						className="slider"
						max={20}
						value={packetCount}
						onChange={(event, newValue) => {
							setPacketCount(newValue);
						}}
						aria-label="Disabled slider"
					/>
				</Mui.Box>
				<Mui.Typography variant="h3" style={{ fontWeight: "bold" }}>
					Ouput:
				</Mui.Typography>
				<Mui.TextareaAutosize
					className="outputText"
					cols="60"
					rows="15"
					value={JSON.stringify(pingData, null, 2)}
				></Mui.TextareaAutosize>
			</Mui.Box>
			<PingResultsMain urlData={urlData} />
		</>
	);
}

export default PingFormMain;
