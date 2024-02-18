import ReactFlipCard from 'reactjs-flip-card'

type PageCarouselProps = {
	carousel: number
}

const PageCarousel = ({ carousel }: PageCarouselProps) => {
	return (
		<div className="h-20 ">
			<ReactFlipCard
				frontComponent={
					carousel === 0 ? (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold ">
							Mon PC se coupe tout le temps, que faire ?
						</div>
					) : carousel === 1 ? (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold ">
							Réparez vous les écrans de PC portable ?
						</div>
					) : carousel === 2 ? (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold ">
							Mon PC ram beaucoup, quelles solutions ai-je ?
						</div>
					) : carousel === 3 ? (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold ">
							J'ai beaucoup de publicité qui s'affiche, pourriez-vous m'aider ?
						</div>
					) : carousel === 4 ? (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold ">
							Vendez-vous des PC ?
						</div>
					) : carousel === 5 ? (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold">
							Quels sont vos délais d'intervention?
						</div>
					) : carousel === 6 ? (
						<div className="flex justify-center items-center h-[80%] px-4  font-bold">
							Mon PC ne démarre plus, que faire ?
						</div>
					) : carousel === 7 ? (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold ">
							A quoi sert un VPN et lequel prendre ?
						</div>
					) : (
						<div className="flex justify-center items-center h-[80%] px-4 font-bold ">
							Mon réseau wifi est désastreux, quelles solutions ai-je ?
						</div>
					)
				}
				backComponent={
					carousel === 0 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Le problème vient habituellement d’une surchauffe et votre pc se
							met en sécurité. Soit votre ventilateur est défectueux ou soit les
							pâtes thermiques qui servent à réguler la température sont trop
							vielles. Dans tous les cas il faudra démonter votre pc
							complètement pour identifier le problème.
						</div>
					) : carousel === 1 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Nous remplaçons les écrans au tarif de 30€ plus le prix de
							l’écran, cout moyen de la réparation totale 110€.
						</div>
					) : carousel === 2 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Nous allons d’abord identifier si c’est un problème matériel ou de
							programme. Une fois le problème localisé nous vous établirons un
							devis. La plupart du temps, la formule sortie d’usine suffit à
							régler tous les problèmes que ce soit disque dur ou programme.
						</div>
					) : carousel === 3 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Nous vous conseillerons systématiquement la formule sortie
							d’usine, nous préférons repartir sur de bonnes bases que nous
							avons établies plutot que de faire un nettoyage de votre pc sans
							avoir la garantie que le résultat attendu sera la.
						</div>
					) : carousel === 4 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Nous assemblons des PC sur mesure en fonction de vos besoins et de
							votre budget. Nous avons aussi des pc d’occasion.
						</div>
					) : carousel === 5 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Nous intervenons dans un délai de 48H 7j/7, nous réparons en
							général les pc entre trois à sept jours en fonction des pièces à
							commander.
						</div>
					) : carousel === 6 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Nous vous conseillons de tester votre alimentation électrique, si
							elle est bonne, de verifier que votre pc reçoit bien le courant.
							Si ces deux éléments sont écartés il faudra qu’on le teste au
							complet afin d'identifier le problème.
						</div>
					) : carousel === 7 ? (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							Un VPN est un tunnel entre vous et un serveur, l’article de ce
							site internet est l'un des plus complets.
						</div>
					) : (
						<div className="flex justify-center items-center h-[80%] px-4  ">
							La premiere chose à faire est d’identifier si le problème vient de
							votre source de base ou de vos locaux. Grande maison, murs épais
							etc… En fonction de ces réponse nous vous établirons un devis qui
							conviendra le mieux à votre cas.
						</div>
					)
				}
				containerCss="w-96 text-center   "
			></ReactFlipCard>
		</div>
	)
}

export default PageCarousel
