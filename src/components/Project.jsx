import React from "react";
import { ArrowRight } from "lucide-react";

function Project({ data, index, open, darkMode }) {
	return (
		<div
			className="sticky top-20 flex justify-center p-4 md:p-10 min-h-[80vh]"
			style={{ top: `${100 + index * 40}px` }}
		>
			<div
				onClick={() => open(data)}
				className={`relative w-full max-w-6xl h-[70vh] rounded-[2rem] overflow-hidden border shadow-2xl cursor-pointer group transition-transform hover:scale-[1.01] ${
					darkMode ? "border-white/10" : "border-black/10"
				}`}
				style={{ backgroundColor: data.couleur }}
			>
				<div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-between z-20 text-white">
					<div>
						<span className="border border-white/30 px-4 py-1 rounded-full text-sm backdrop-blur-md">
							{data.categorie}
						</span>
						<h3 className="text-4xl md:text-6xl font-bold mt-4">
							{data.titre}
						</h3>
					</div>
					<div className="flex items-center gap-3 group-hover:gap-6 transition-all">
						Explorer <ArrowRight className="w-5 h-5" />
					</div>
				</div>
				<img
					src={data.image}
					className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
					alt=""
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
			</div>
		</div>
	);
}
export default Project;
