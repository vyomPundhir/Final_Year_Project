import "../darkmode.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ themeChanger, icon, iconstyle }) {
	return (
		<div className={`navbar py-4 pr-5 pl-3 `}>
			<div className="navbar-start">
				<div className="dropdown-hover dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mt-[-5px]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content p-2 shadow  rounded-box w-52 border"
					>
						<li>
							<Link to="/">Homepage</Link>
						</li>
						<li>
							<Link to="/2016-17">2016-17</Link>
						</li>
						<li>
							<Link to="/2017-18">2017-18</Link>
						</li>
						<li>
							<Link to="/2018-19">2018-19</Link>
						</li>
						<li>
							<Link to="/2019-20">2019-20</Link>
						</li>
						<li>
							<Link to="/2020-21">2020-21</Link>
						</li>
						<li>
							<Link to="/2021-22">2021-22</Link>
						</li>
						<li>
							<Link to="/2022-23">2022-23</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Final Year Project
				</Link>
			</div>
			<div className="navbar-end">
				<button onClick={themeChanger}>
					<img className={iconstyle} src={icon} alt="image" />
				</button>
			</div>
		</div>
	);
}
export default Navbar;
