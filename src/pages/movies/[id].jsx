import React from "react";
import {
	PosterContainer,
	LogoRates,
	DescriptioContainer,
	RatesContainer,
	Purple,
	ContainerInfoMovie,
	Poster,
	As,
	Info,
	Contenedor,
	Puntuaciones,
} from "@styles/pages.styles/movies.styles";
import Image from "next/image";
import Link from "next/link";
import { getMovie } from "@/service/movie";

function MovieDetail({ movies }) {
	console.log(movies);
	return (
		<main>
			<Purple></Purple>
			<Contenedor>
				<ContainerInfoMovie>
					<Info>
						<p className="genero">{movies?.genre}</p>
						<p className="anio">{movies?.releaseDate}</p>
						<p className="titulo">{movies?.title}</p>
						<span className="cast">
							Director:
							<p className="castD">{movies?.director}</p>
						</span>
						<span className="cast">
							Musica:
							<p className="castD">{movies?.composer}</p>
						</span>
						<span className="cast">
							Elenco:
							<p className="castD">{movies?.actors}</p>
						</span>
						<span className="platforms">
							Disponible en:
							<div className="imagenPlatform">
								<Image className="logo" src="/images/home/logos/disney.svg" alt="" width={100} height={100} />
							</div>
						</span>
					</Info>
					<As>
						<PosterContainer>
							<Poster src={movies?.image_url} />
						</PosterContainer>
						<RatesContainer>
							<LogoRates src="/images/home/A.png" alt="Profile" />
						</RatesContainer>
						<div className="container">
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
						</div>
					</As>
				</ContainerInfoMovie>
				<DescriptioContainer>
					<Puntuaciones className="puntuacion">
						<p className="numerosPorcentaje div3">{movies?.rt_score}</p>
						<p className="numerosPorcentaje div4">{movies?.imdb_score}</p>
						<p className="numerosPorcentaje div5">{movies?.mc_score}</p>

						<Image src="/images/Group.svg" alt="imagen1" width={50} height={50} className="div6" />
						<Image src="/images/Metacritic1.png" alt="imagen1" width={50} height={50} className="div7" />
						<Image src="/images/RottenTomatoes.png" alt="imagen1" width={80} height={50} className="div8" />
					</Puntuaciones>
					<p className="day_p">{movies?.review}</p>
				</DescriptioContainer>
				{/* <Sugestions>
					<h4 className="oldies_title">Sugerencias</h4>
					<div className="suggestions_cards">
						{cardMovies.slice(0, 3).map((item) => (
							<div className="card" key={item.id}>
								{" "}
								<Card movie={item} />
							</div>
						))}
					</div>
				</Sugestions> */}
			</Contenedor>
		</main>
	);
}

export async function getServerSideProps(contexto) {
	const { id } = contexto.params;
	const movies = await getMovie(id);
	return {
		props: {
			movies,
		},
	};
}

export default MovieDetail;
