import * as React from "react";
import "./style-ping.css";
import * as Mui from "@material-ui/core";

export default function PingResultsMain({ urlData }) {
	return (
		<>
			{" "}
			<Mui.Box className="resultsMain">
				<Mui.TableContainer component={Mui.Paper}>
					<Mui.Table style={{ minWidth: "700" }} aria-label="customized table">
						<Mui.TableHead>
							<Mui.TableRow>
								<Mui.TableCell className="header">
									<Mui.Typography variant="h5" className="headerText">
										Top Ping Sites
									</Mui.Typography>
								</Mui.TableCell>
								<Mui.TableCell className="header" align="right">
									<Mui.Typography className="headerText" variant="h5">
										Count
									</Mui.Typography>
								</Mui.TableCell>
							</Mui.TableRow>
						</Mui.TableHead>
						<Mui.TableBody>
							{urlData.map((elem) => (
								<Mui.TableRow className="row" key={elem.url}>
									{" "}
									<Mui.TableCell component="th" scope="row">
										{elem.url}
									</Mui.TableCell>
									<Mui.TableCell align="right">{elem.count}</Mui.TableCell>
								</Mui.TableRow>
							))}
						</Mui.TableBody>
					</Mui.Table>
				</Mui.TableContainer>
			</Mui.Box>
		</>
	);
}
