import React, { useState } from "react";
import {Loader2, Mailbox } from "lucide-react";

function Chat() {
	const [text, setText] = useState("");
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);

	const send = () => {
		if (!text) return;
		setLoading(true);
		setTimeout(() => {
			const body = `${text}\n\n Content que vous m'écriviez n'hésitez pas à me proposer des offres ou des idées je suis ouvert à tout. Cordialement Hugo V. GONCALVES`;
			setResponse(body);
			setLoading(false);
			window.location.href = `mailto:hv.fernandes.pro@gmail.com?subject=Prise de contact&body=${encodeURIComponent(body)}`;
		}, 1500);
	};

	return (
		<div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
			<h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
				<Mailbox className="text-yellow-400 w-5 h-5" /> Contactez-moi !
			</h3>
			{!response ? (
				<>
					<textarea
						className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white mb-4 focus:outline-none focus:border-blue-500"
						placeholder="Écrivez votre message ici..."
						value={text}
						onChange={(e) => setText(e.target.value)}
						rows={3}
					/>
					<button
						onClick={send}
						disabled={loading || !text}
						className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2"
					>
						{loading ? (
							<Loader2 className="animate-spin w-4 h-4" />
						) : (
							"Generer et Envoyer le Message"
						)}
					</button>
				</>
			) : (
				<div className="bg-black/50 p-6 rounded-xl border border-blue-500/20 text-zinc-300 text-sm animate-in fade-in">
					{response}
					<button
						onClick={() => setResponse("")}
						className="block mt-4 text-zinc-500 underline text-xs"
					>
						Recommencer
					</button>
				</div>
			)}
		</div>
	);
}
export default Chat;
