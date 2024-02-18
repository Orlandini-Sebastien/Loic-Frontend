import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<section>
			<section className="w-4/5 m-auto flex justify-between">
				<img className='object-contain flex max-lg:w-1/4' src={hero1} alt="hero" />
				<img className='object-contain flex max-lg:w-1/3' src={hero2} alt="hero" />
				<img className='object-contain flex max-lg:w-1/3' src={hero3} alt="hero" />
			</section>
			<section>
				<Link to={"/"} ></Link>
			</section>
		</section>
	)
}
export default Header
