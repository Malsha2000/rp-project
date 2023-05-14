import {
	UilUsdSquare,
	UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import {
    UilClipboardAlt,
  } from "@iconscout/react-unicons";

export const blowerCardsData = [
	{
		title: "Temperature",
		color: {
			backGround:
				"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
			boxShadow: "0px 10px 20px 0px #e0c6f5",
		},
		barValue: 70,
		value: "25,970",
		png: UilUsdSquare,
		series: [
			{
				name: "Sales",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},
	{
		title: "Humanitability",
		color: {
			backGround:
				"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
			boxShadow: "0px 10px 20px 0px #FDC0C7",
		},
		barValue: 80,
		value: "14,270",
		png: UilMoneyWithdrawal,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},
	{
		title: "Vibration",
		color: {
			backGround:
				"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
			boxShadow: "0px 10px 20px 0px #F9D59B",
		},
		barValue: 60,
		value: "4,270",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
    {
		title: "Ampere",
		color: {
			backGround:
				"linear-gradient(rgb(212, 212, 154) -146.42%, rgb(154 212 212) -46.42%)",
			boxShadow: "0px 10px 20px 0px #F9D59B",
		},
		barValue: 40,
		value: "4,270",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 20, 10, 35, 8, 18, 25],
			},
		],
	},
];
