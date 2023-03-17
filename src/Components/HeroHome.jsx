import CardComp from "./CardComp";
function HeroHome() {
	return (
		<div className="flex flex-col">
			<div className="hero h-[250px] mb-14 ">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello Everyone</h1>
						<p className="py-8 w-[580px] ml-[-70px] text-[18px] leading-7 font-medium">
							In this project, we tried to demonstrate the details of the
							students that were unplaced at the end of each academic year.
						</p>
						<p className="pb-8 w-[550px] ml-[-48px] font-normal text-md">
							Checkout the official website of our college for more details
						</p>
						<a href={"https://jecrcfoundation.com/"}>
							<button className="btn btn-primary">Click Here</button>
						</a>
					</div>
				</div>
			</div>
			<div>
				<CardComp title="Project Contributors" />
			</div>
		</div>
	);
}
export default HeroHome;
