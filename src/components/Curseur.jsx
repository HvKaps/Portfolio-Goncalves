import React, { useState, useEffect } from "react";

const Curseur = () => {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updatePos = (e) => setPos({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", updatePos);
		return () => window.removeEventListener("mousemove", updatePos);
	}, []);

	return (
		<div
			className="fixed top-0 left-0 w-6 h-6 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-transform duration-75 ease-out"
			style={{ transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)` }}
		/>
	);
};

export default Curseur;
