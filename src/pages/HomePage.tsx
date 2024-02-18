import { useState } from 'react'
import depannage from '../assets/depannage-informatique-reparation-ordinateur-1.png'
import engagement from '../assets/engagement.png'
import question from '../assets/questions2.png'
import PageCarousel from '../utils/PageCarousel'
import fleche from '../assets/fleche.png'

const HomePage = () => {
	const [carousel, setCarousel] = useState(0)
	const handleCarouselLeft = () => {
		if (carousel !== 7) {
			setCarousel((prev) => prev + 1)
		} else {
			setCarousel(0)
		}
	}
	const handleCarouselRight = () => {
		if (carousel !== 0) {
			setCarousel((prev) => prev - 1)
		} else {
			setCarousel(7)
		}
	}
	return (
		<section className="md:w-4/5 max-md:w-11/12 m-auto bg-slate-100">
			<h1 className="max-md:text-lg text-2xl my-10 justify-center flex text-center font-bold ">
				A.M.Info est une société spécialisée dans le dépannage informatique
			</h1>

			<div className="max-md:flex-col flex justify-between w-full  rounded my-10 max-md:items-center">
				<img
					className="max-md:mb-4 h-40  bg-vert-loic/10 w-40 border-solid border-2 border-vert-loic rounded-full object-cover md:mr-9 shadow-md shadow-vert-loic "
					src={depannage}
					alt="depannage"
				/>
				<div className="w-full border-2 border-solid border-vert-loic self-center rounded-xl max-md:bg-vert-loic/40 bg-vert-loic/20 shadow-md shadow-vert-loic  ">
					<div className="max-md:text-lg text-2xl font-semibold">
						Nous vous proposons :
					</div>
					<div className="max-md:text-xs flex flex-col  h-full ">
						<div>Une assistance technique et multimédia.</div>
						<div>Des conseils avant achat.</div>
						<div>
							Des astuces pour une utilisation agréable et facile de tous vos
							équipements informatiques et multimédias.
						</div>
					</div>
				</div>
			</div>

			<div className="my-10">
				<p className="flex justify-between w-full items-center">
					<div className="w-full border ">
						<div className="max-md:text-lg   text-2xl flex justify-center font-semibold">
							Nos différents engagements
						</div>
						<div className="max-md:text-xs flex  h-full justify-around items-center relative">
							<div className="w-1/2 z-10">
								<div className="border-2  max-md:bg-vert-loic/40 bg-vert-loic/20 border-vert-loic border-solid  rounded-xl  my-6 shadow-md shadow-vert-loic   ">
									A.M.Info intervient dans un délai de 48 heures maximum 7j/7.
								</div>
								<div className="border-2  max-md:bg-vert-loic/40 bg-vert-loic/20 border-vert-loic border-solid  rounded-xl my-6 mr-4 shadow-md shadow-vert-loic ">
									Quel que soit votre problème, vous connaitrez le coût exact de
									l'intervention.
								</div>
								<div className="border-2  max-md:bg-vert-loic/40 bg-vert-loic/20 border-vert-loic border-solid  rounded-xl my-6 mr-6 shadow-md shadow-vert-loic ">
									Pour chaque intervention de dépannage informatique à domicile,
									vous disposez de cinq jours d'assistance technique durant
									laquelle, si le même problème réapparaît, A.M.Info s'engage à
									revenir gratuitement.
								</div>
							</div>

							<img
								className="max-md:absolute max-md:z-0  h-40 w-40 bg-vert-loic/20 border-vert-loic border-solid border-2 rounded-full object-cover shadow-md shadow-vert-loic  "
								src={engagement}
								alt="engagement"
							/>
							<div className="w-1/2 z-10">
								<div className="border-2 max-md:bg-vert-loic/40 bg-vert-loic/20 border-vert-loic border-solid  rounded-xl my-6 ml-6 shadow-md shadow-vert-loic ">
									Le respect de la vie privée : en aucun cas vos fichiers ne
									seront ouverts et ils se limiteront à un simple transfert de
									données.
								</div>
								<div className="border-2 max-md:bg-vert-loic/40 bg-vert-loic/20 border-vert-loic border-solid  rounded-xl my-6 ml-4 shadow-md shadow-vert-loic ">
									Les interventions sur votre materiel sont seulement avec votre
									accord pour toute réparation.
								</div>
								<div className="border-2 max-md:bg-vert-loic/40 bg-vert-loic/20 border-vert-loic border-solid  rounded-xl my-6 shadow-md shadow-vert-loic ">
									A tester votre materiel pour une utilisation optimale.
								</div>
							</div>
						</div>
					</div>
				</p>
			</div>

			<h1 className="max-md:text-lg text-2xl  flex justify-center mb-8 font-semibold">
				Questions Fréquentes
			</h1>

			<div className="my-4 flex flex-wrap justify-center  items-center rounded gap-4 relative ">
				<img
					className="max-md:opacity-50 max-md:absolute max-md:top-0 h-40 w-40 bg-vert-loic/20 border-solid border-2 border-vert-loic rounded-full object-fill lg:mr-9 shadow-md shadow-vert-loic  "
					src={question}
					alt="engagement"
				/>

				<div className="flex flex-col h-40 ">
					<div className="flex justify-between items-center  h-full ">
						<button className="w-20 px-4" onClick={handleCarouselLeft}>
							<img
								className="rotate-180 hover:scale-110  "
								src={fleche}
								alt="fleche"
							/>
						</button>
						<div className=" border-2 border-solid rounded-xl flex items-center border-vert-loic bg-vert-loic/20 h-48 shadow-md shadow-vert-loic ">
							<PageCarousel carousel={carousel} />
						</div>

						<button
							className="hover:scale-110 w-20 px-4"
							onClick={handleCarouselRight}
						>
							<img src={fleche} alt="fleche" />
						</button>
					</div>
				</div>

				<div className="text-center border-2 border-solid bg-vert-loic text-white rounded-xl my-4 shadow-md shadow-white border-white ">
					Vous avez des autres questions? Contacter nous vite, grâce à notre
					savoir-faire, nous interviendrons dans le plus bref délais afin que
					votre expérience avec votre PC redevienne un plaisir !!!
				</div>
			</div>
		</section>
	)
}

export default HomePage
