import { Github, Linkedin, Globe, Mail } from "lucide-react";
import Chat from "./Chat.jsx";

function Footer({ darkMode }) {
    return (<>

        {/* FOOTER */}
			<footer
				id="contact"
				className={`py-32 px-6 ${
					darkMode ? "bg-white text-black" : "bg-zinc-900 text-white"
				}`}
			>
				{/* ... contenu footer ... */}
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
					<div>
						<h2 className="text-6xl font-bold tracking-tighter mb-6">
							Contact.
						</h2>
						<a
							href="mailto:hv.fernandes.pro@gmail.com"
							className="flex items-center gap-3 text-2xl font-medium hover:opacity-50 transition-opacity cursor-pointer"
						>
							<div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
								<Mail size={18} />
							</div>
							hv.fernandes.pro@gmail.com
						</a>
						<div className="flex gap-4 mt-8">
							{[
								{
									Icon: Github,
									href: "https://github.com/HvKaps",
								},
								{
									Icon: Linkedin,
									href: "https://www.linkedin.com/in/hugo-vitor-goncalves-fernandes-bb9701299/",
								},
								{ Icon: Globe, href: "#" },
							].map(({ Icon, href }, i) => (
								<a
									key={i}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className={`p-3 border rounded-full transition-colors cursor-pointer ${
										darkMode
											? "border-black/10 hover:bg-black hover:text-white"
											: "border-white/10 hover:bg-white hover:text-black"
									}`}
								>
									<Icon size={20} />
								</a>
							))}
						</div>
					</div>
					<div>
						<Chat />
					</div>
				</div>
			</footer>
                    </>);
}

export default Footer;