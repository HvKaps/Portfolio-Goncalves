import {
	X,
	Zap,
	Layers,
	CodeXml,
	ExternalLink,
	Figma,
	Github,
	Image as ImageIcon,
} from "lucide-react";
import Footer from "./Footer.jsx";


const RESSOURCE_STYLES = {
	web: {
		icon: CodeXml,
		couleurTexte: "text-blue-400",
		couleurBordure: "hover:border-blue-500/50",
		couleurFond: "from-blue-500/10",
	},
	figma: {
		icon: Figma,
		couleurTexte: "text-purple-400",
		couleurBordure: "hover:border-purple-500/50",
		couleurFond: "from-purple-500/10",
	},
	github: {
		icon: Github,
		couleurTexte: "text-white",
		couleurBordure: "hover:border-white/50",
		couleurFond: "from-white/10",
	},
	// Style de secours si on met un type inconnu
	defaut: {
		icon: ExternalLink,
		couleurTexte: "text-gray-400",
		couleurBordure: "hover:border-gray-500/50",
		couleurFond: "from-gray-500/10",
	},
};

const Modal = ({ data, close, darkMode }) => {
	// SÉCURITÉ : Si "data" est vide, on arrête tout.
	if (!data) return null;

	return (
		<div
			className={`fixed inset-0 z-[100] overflow-y-auto animate-in slide-in-from-bottom-10 ${
				darkMode ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900"
			}`}
		>
			{/* Bouton Fermer */}
			<button
				onClick={close}
				className={`fixed top-8 right-8 z-[110] p-3 rounded-full border transition-colors cursor-pointer ${
					darkMode
						? "bg-black/50 border-white/10 hover:bg-white hover:text-black"
						: "bg-white/50 border-black/10 hover:bg-black hover:text-white"
				}`}
			>
				<X className="w-6 h-6" />
			</button>

			{/* Hero Image (Grande image en haut) */}
			<div className="h-[60vh] w-full relative">
				<img
					src={data.image}
					className="w-full h-full object-cover opacity-80"
					alt=""
				/>
				<div
					className={`absolute bottom-0 left-0 p-8 md:p-20 bg-gradient-to-t w-full to-transparent ${
						darkMode ? "from-zinc-950" : "from-zinc-50"
					}`}
				>
					<div className="max-w-5xl mx-auto">
						<span
							className={`border px-3 py-1 rounded-full text-xs backdrop-blur-md mb-4 inline-block ${
								darkMode ? "border-white/30" : "border-black/30"
							}`}
						>
							{data.annee} — {data.categorie}
						</span>
						<h1 className="text-5xl md:text-8xl font-bold">
							{data.titre}
						</h1>
					</div>
				</div>
			</div>

			{/* Contenu du projet */}
			<div className="max-w-5xl mx-auto p-8 md:p-20">
				{/* Description & Stack */}
				<div className="grid md:grid-cols-2 gap-16 mb-20">
					<div>
						<h3 className="text-2xl font-bold mb-6">Le Concept</h3>
						<p
							className={`text-lg leading-relaxed mb-8 ${
								darkMode ? "text-zinc-300" : "text-zinc-600"
							}`}
						>
							{data.description}
						</p>
						<div className="flex gap-2 flex-wrap">
							{data.technos &&
								data.technos.map((t) => (
									<span
										key={t}
										className={`px-3 py-1 rounded text-sm border ${
											darkMode
												? "bg-white/5 border-white/10"
												: "bg-black/5 border-black/10"
										}`}
									>
										{t}
									</span>
								))}
						</div>
					</div>
					<div
						className={`space-y-6 ${
							darkMode ? "text-zinc-400" : "text-zinc-600"
						}`}
					>
						<div
							className={`p-6 rounded-2xl border ${
								darkMode
									? "bg-zinc-900/50 border-white/5"
									: "bg-white border-black/5 shadow-sm"
							}`}
						>
							<h3
								className={`font-bold mb-2 flex items-center gap-2 ${
									darkMode ? "text-white" : "text-black"
								}`}
							>
								<Zap className="text-yellow-500" /> Challenge
							</h3>
							<p>{data.challenge}</p>
						</div>
						<div
							className={`p-6 rounded-2xl border ${
								darkMode
									? "bg-zinc-900/50 border-white/5"
									: "bg-white border-black/5 shadow-sm"
							}`}
						>
							<h3
								className={`font-bold mb-2 flex items-center gap-2 ${
									darkMode ? "text-white" : "text-black"
								}`}
							>
								<Layers className="text-blue-500" /> Solution
							</h3>
							<p>{data.solution}</p>
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-1 gap-5 h-[400px]">
					<div
						className={`rounded-3xl overflow-hidden border ${
							darkMode
								? "bg-zinc-800 border-white/10"
								: "bg-zinc-200 border-black/10"
						}`}
					>
						<img
							src={data.image}
							className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
							alt=""
						/>
					</div>
				</div>
				{/* SECTION RESSOURCES (Les cartes Web, Figma, Github) */}

				{data.resources && data.resources.length > 0 && (
					<div className="grid md:grid-cols-2 gap-6 my-10">
						{data.resources.map((res, index) => {
							const style =
								RESSOURCE_STYLES[res.type] ||
								RESSOURCE_STYLES.defaut;
							const Icone = style.icon;

							return (
								<div
									key={index}
									className={`group relative rounded-3xl overflow-hidden border ${
										style.couleurBordure
									} transition-colors duration-500 ${
										darkMode
											? "bg-zinc-800 border-white/10"
											: "bg-white border-black/10 shadow-md"
									}`}
								>
									<div
										className={`absolute inset-0 bg-gradient-to-br ${style.couleurFond} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
									/>

									<div className="relative h-full p-8 flex flex-col justify-between z-10 min-h-[300px]">
										<div>
											<div
												className={`w-12 h-12 bg-zinc-700/50 rounded-full flex items-center justify-center mb-6 ${style.couleurTexte} group-hover:scale-110 transition-transform duration-300`}
											>
												<Icone />
											</div>

											<h3
												className={`text-2xl font-bold mb-2 ${
													darkMode
														? "text-white"
														: "text-black"
												}`}
											>
												{res.title}
											</h3>
											<p
												className={`leading-relaxed text-sm ${
													darkMode
														? "text-zinc-400"
														: "text-zinc-600"
												}`}
											>
												{res.desc}
											</p>
										</div>

										<div
											className={`flex items-center text-sm font-medium group-hover:${
												style.couleurTexte
											} transition-colors mt-6 ${
												darkMode
													? "text-white"
													: "text-black"
											}`}
										>
											<a
												href={res.url}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2"
											>
												<span>{res.btnText}</span>
												<ExternalLink size={16} />
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)}
				{/* SECTION GALERIE */}
				{data.galerie && data.galerie.length > 0 && (
					<div>
						<h3
							className={`text-2xl font-bold mb-8 border-b pb-4 ${
								darkMode ? "border-white/10" : "border-black/10"
							}`}
						>
							Galerie d'images
						</h3>
						<div className="grid md:grid-cols-2 gap-10">
							{data.galerie.map((item, index) => (
								<div
									key={index}
									className={`rounded-3xl overflow-hidden border shadow-2xl ${
										darkMode
											? "bg-zinc-800 border-white/10"
											: "bg-zinc-200 border-black/10"
									}`}
								>
									<img
										src={item.img}
										className="w-100 h-100 object-cover hover:scale-[1.02] transition-transform duration-700"
										alt=""
									/>
								</div>
							))}
						</div>
					</div>
				)}
				
				{/* Bouton Fermer */}
				<div className="flex items-center justify-center mt-20">
					<button
						onClick={close}
						className="text-zinc-500 hover:text-white underline cursor-pointer"
					>
						Fermer le projet
					</button>
					
				</div>
				
			</div>
			<div>
						<Footer darkMode={darkMode} />
					</div>
		</div>
	);
};

export default Modal;
