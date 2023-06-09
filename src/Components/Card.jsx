function Card({ src, name, link, branch, year }) {
	return (
		<div className="card w-80 border border-white shadow-2xl">
			<figure className="px-10 pt-10">
				<img src={src} alt="Shoes" className="rounded-xl border border-white" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
				{/* <a className="card-actions mt-4" href={link}>
					<button className="btn btn-primary">Check Out Awesome Content</button>
				</a> */}
				<h2 className="card-title">Branch: {branch}</h2>
				<h2 className="card-title">Batch: {year}</h2>
			</div>
		</div>
	);
}
export default Card;
