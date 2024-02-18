import hero1 from '../assets/logo.png'

import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<section>
			<section className="max-md:text-xs md:w-4/5 max-md:w-11/12 m-auto flex justify-between items-center">
				<div className="flex flex-col justify-center items-center text-center h-full ">
					<img className="object-contain flex  w-10" src={hero1} alt="hero" />
					<div className="max-md:text-xs text-xl">A-M-Info.fr</div>
					<div className=" text-xs italic">L'info devient un plaisir</div>
				</div>

				<div className='h-full'>
					<div>
						<span className="text-vert-loic">A</span>ssistance,
					</div>
					<div className="max-md:ml-6 ml-10">
						<span className="text-vert-loic">M</span>aintenance,
					</div>
					<div className="max-md:ml-12 ml-20">
						<span className="text-vert-loic">I</span>nformatique.
					</div>
				</div>

				<div className='text-center h-full'>
					<div>7j/7</div>
					<div>De 9h00 à 20h00</div>
					<div>06 84 97 66 67</div>
				</div>
			</section>

			<section className="max-md:text-xs md:w-4/5 max-md:w-11/12 m-auto flex justify-between items-center my-4">
				<Link to={'/'}>Accueil</Link>
				<Link to={'/deplacement'}>Déplacement</Link>
				<Link to={'/contact'}>Contact</Link>
			</section>
		</section >
	)
}
export default Header
