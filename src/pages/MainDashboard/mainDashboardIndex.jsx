import React, { useState } from "react";
import MainDash from "../../components/MainDashboard/MainDash/MainDash";
import Sidebar from "../../components/MainDashboard/SideBar/Sidebar";
import RightSide from "../../components/MainDashboard/RigtSide/RightSide";
import "./mainDashboardIndex.css";

const MainDashboardPage = () => {
	return (
		<>
			<div className="App">
				<div className="AppGlass">
					<Sidebar />
					<MainDash />
					<RightSide />
				</div>
			</div>
		</>
	);
};

export default MainDashboardPage;
