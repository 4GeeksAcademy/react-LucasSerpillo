import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import Card from "./Cards";
import Footer from "./footer";

const cards = [{
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCzJ7-2NR-IgYdkhXpj9u08A6_03X_3zs9BpSCwzem49Zuf3flfbJgtC4_BiuDk1nvHE&usqp=CAU",
	title: "Gato Modelo Primavera",
	descripcion: "Tendencia moda gatuna 2024-2025, primavera"
},
{
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimIsi7F9R-iJw946xjAaVXHeY4Dho5HTTIcRBmwYkRlrJH8o63KPMo2Vll5sHKv7wNYY&usqp=CAU",
	title: "Gato Modelo Verano",
	descripcion: "Tendencia moda gatuna 2024-2025, Verano"
},
{
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsY-p3DQwpgqVCZfq-xUDLJpRY_BpS1b7hL5Zbk3oBugtWngCD6EzGGxYus5V9GenJjk&usqp=CAU",
	title: "Gato Modelo Otoño",
	descripcion: "Tendencia moda gatuna 2024-2025, Otoño"
},
{
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwQBEk4-GWO_6LQ_TV6QMY4jusz_E7OiJ0jRZZ92E9rpERjzcR5CrM17-0e7nU6lFg2M&usqp=CAU",
	title: "Gato modelo Invierno",
	descripcion: "Tendencia moda gatuna 2024-2025, Invierno"
}

]


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container-fluid">
			<Jumbotron />
				<div className="row ">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={index}>
							<Card image={item.image} title={item.title} descripcion={item.descripcion} />

						</div>
					))}
				</div>
			</div >
			<Footer />
		</div>
	);
};

export default Home;
