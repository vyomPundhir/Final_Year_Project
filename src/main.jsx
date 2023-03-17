import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HeroHome from "./Components/HeroHome";
import HeroHomeYear from "./Components/HeroHomeYear";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// const appRouter = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 	},
// 	{
// 		path: "/about",
// 		element: <HeroAbout />,
// 	},
// 	{
// 		path: "/contact",
// 		element: <HeroContact />,
// 	},
// ]);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HeroHome />,
			},
			{
				path: "/2016-17",
				element: <HeroHomeYear year="2016-17" />,
			},
			{
				path: "/2017-18",
				element: <HeroHomeYear year="2017-18" />,
			},
			{
				path: "/2018-19",
				element: <HeroHomeYear year="2018-19" />,
			},
			{
				path: "/2019-20",
				element: <HeroHomeYear year="2019-20" />,
			},
			{
				path: "/2020-21",
				element: <HeroHomeYear year="2020-21" />,
			},
			{
				path: "/2021-22",
				element: <HeroHomeYear year="2021-22" />,
			},
			{
				path: "/2022-23",
				element: <HeroHomeYear year="2022-23" />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
);
