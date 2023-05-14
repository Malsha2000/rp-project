import React, { useState } from "react";
import MainDash from "../../components/MainDashboard/MainDash/MainDash";
import Sidebar from "../../components/MainDashboard/SideBar/Sidebar";
import RightSide from "../../components/MainDashboard/RigtSide/RightSide";
import BlowerDashbooard from "../../components/BlowerDashboard/Blower/Blower";
import "./blowerDashboardIndex.css";

const BlowerDashbooardPage = () => {
	return (
		<>
			<div className="App">
				<div className="AppGlass">
					<Sidebar />
					<BlowerDashbooard />
					<RightSide />
				</div>
			</div>
		</>
	);
};

export default BlowerDashbooardPage;
