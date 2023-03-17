import Card from "./Card";
import vyom from "../assets/vyom.jfif";

function CardComp({ title }) {
	return (
		<div className="flex flex-col justify-center items-center gap-16 pt-8">
			<h2 className="text-4xl font-semibold mt-8">{title}</h2>
			<div className="flex justify-center items-center gap-20 flex-wrap">
				<Card
					src={vyom}
					name="Anurag Tiwari Sir"
					link="https://www.youtube.com/@anuragtiwarime"
					year="2019-2023"
				/>
				<Card
					src={vyom}
					name="Vyom Pundhir"
					link="https://www.youtube.com/@HiteshChoudharydotcom"
					branch="Electrical"
					year="2019-2023"
				/>

				<Card
					src={vyom}
					name="Anirudh Jwala Sir"
					link="https://github.com/jwala-anirudh"
					year="2019-2023"
				/>
				<Card
					src={vyom}
					name="Vyom Pundhir"
					link="https://www.youtube.com/@HiteshChoudharydotcom"
					branch="Electrical"
					year="2019-2023"
				/>
				<Card
					src={vyom}
					name="Vyom Pundhir"
					link="https://www.youtube.com/@HiteshChoudharydotcom"
					branch="Electrical"
					year="2019-2023"
				/>
			</div>
		</div>
	);
}
export default CardComp;
