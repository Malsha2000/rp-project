import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlowerDashbooardPage from "../pages/BlowerDashboard/blowerDashboardIndex";
import MainDashboardPage from "../pages/MainDashboard/mainDashboardIndex";

const PageRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/main-dashboard"
						element={<MainDashboardPage />}></Route>
					<Route
						path="/blower-dashboard"
						element={<BlowerDashbooardPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
