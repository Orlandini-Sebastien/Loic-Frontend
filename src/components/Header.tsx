import hero1 from '../assets/logo.png'

import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<section>
			<section className="w-4/5 m-auto flex justify-between bg-white items-center">
				<div className='flex flex-col justify-center items-center'>
					<img
						className="object-contain flex max-lg:w-1/4 w-16"
						src={hero1}
						alt="hero"
					/>
					<div className='text-xl'>A-M-Info.fr</div>
					<div className='text-xs italic'>L'info devient un plaisir</div>
				</div>

				<div>
					<div>
						<span className="text-vert-loic">A</span>ssistance,
					</div>
					<div className="ml-10">
						<span className="text-vert-loic">M</span>aintenance,
					</div>
					<div className="ml-20">
						<span className="text-vert-loic">I</span>nformatique.
					</div>
				</div>

				<div>
					<div>7j/7</div>
					<div>De 9h00 à 20h00</div>
					<div>06 84 97 66 67</div>
				</div>
			</section>

			<section>
				<Link to={'/'}></Link>
			</section>
		</section>
	)
}
export default Header
