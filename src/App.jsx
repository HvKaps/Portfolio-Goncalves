import React, { useState, useEffect } from "react";
import {
    ArrowRight,
    X,
    Mail,
    Github,
    Linkedin,
    Globe,
    Layers,
    Zap,
    GraduationCap,
    Sparkles,
    Loader2,
    User,
    IdCard,
    Sun,
    Moon,
    Code,
    FileCode,
    Component,
    Server,
    Database,
    PenTool,
    DraftingCompass,
    Slice,
    Palette,
    Box,
    Container,
    Cuboid,
    GitBranch,
    ClipboardList,
    TrendingUp,
    Search,
} from "lucide-react";
import Modal from "./components/Modal.jsx";
import Project from "./components/Project.jsx";
import Curseur from "./components/Curseur.jsx";
import Chat from "./components/Chat.jsx";
import Skill from "./components/Skills.jsx";
// --- AJOUT DE L'IMPORT ---
import CvViewer from "./components/CvViewer.jsx"; 

import DATA from "./DATA/Data.json";

import "./App.css";

import H_photo from "/image/H_photo.png";


export default function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    // --- AJOUT DU STATE POUR LE CV ---
    const [showCv, setShowCv] = useState(false); 
    
    const [darkMode, setDarkMode] = useState(true);
    
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className={`min-h-screen font-sans cursor-none-override transition-colors duration-300 ${
                darkMode ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900"
            }`}
        >
            <style>{`html { scroll-behavior: smooth; } body { cursor: none; }`}</style>

            <Curseur />

            {/* MODAL PROJETS */}
            {selectedProject && (
                <Modal
                    data={selectedProject}
                    close={() => setSelectedProject(null)}
                    darkMode={darkMode}
                />
            )}

            {/* --- AJOUT DU COMPOSANT CV VIEWER --- */}
            <CvViewer 
                isOpen={showCv} 
                onClose={() => setShowCv(false)} 
                darkMode={darkMode} 
            />

            {/* HEADER */}
            <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
                <a
                    href="#"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-bold text-xl cursor-pointer"
                >
                    HV.DEV
                </a>
                <nav className="hidden md:flex gap-8 text-sm font-medium opacity-80">
                    {["About", "Projets", "Competences", "Contact"].map(
                        (item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase())}
                                className="hover:text-blue-300 transition-colors cursor-pointer uppercase tracking-widest"
                            >
                                {item}
                            </button>
                        )
                    )}
                </nav>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    
                    {/* --- BOUTON MODIFIÉ --- */}
                    <button 
                        onClick={() => setShowCv(true)}
                        className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform cursor-pointer"
                    >
                        Mon CV {<ArrowRight className="inline-block w-4 h-4 ml-2" />}
                    </button>
                </div>
            </header>

            {/* ... LE RESTE DE TON CODE RESTE IDENTIQUE ... */}
            
            {/* HERO */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
             {/* ... contenu du hero ... */}
                <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="relative z-10">
                    <div
                        className={`inline-block px-3 py-1 rounded-full border text-sm mb-6 ${
                            darkMode
                                ? "bg-white/10 border-white/5 text-blue-300"
                                : "bg-blue-100 border-blue-200 text-blue-600"
                        }`}
                    >
                        🚀 Recherche D'un Stage
                    </div>
                    <h1
                        className={`text-[12vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b ${
                            darkMode
                                ? "from-white to-white/40"
                                : "from-zinc-900 to-zinc-500"
                        }`}
                    >
                        Developpeur
                        <br />
                        Etudiant.
                    </h1>
                    <p
                        className={`mt-6 text-xl max-w-lg mx-auto ${
                            darkMode ? "text-zinc-400" : "text-zinc-600"
                        }`}
                    >
                        J'apprends à développer des applications web modernes.
                    </p>
                </div>
            </section>

            {/* À PROPOS */}
            <section
                id="about"
                className={`py-32 px-6 md:px-20 max-w-7xl mx-auto border-t ${
                    darkMode ? "border-white/5" : "border-black/5"
                }`}
            >
                {/* ... contenu about ... */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            À propos.
                        </h2>
                        <p
                            className={`text-lg mb-6 ${
                                darkMode ? "text-zinc-400" : "text-zinc-600"
                            }`}
                        >
                            Je suis <strong className="bg">Hugo</strong>,
                            Etudiant en 3eme année de BUT MMI. <br /> <br />
                            Durant cette année, j'ai eu l'occasion d'acquérir de
                            nombreuses compétences dans divers domaines liés au
                            multimédia et à l'internet. <br /> <br />
                            Ces compétences incluent, entre autres, la
                            conception graphique, le développement web, la
                            gestion de projets numériques et l'utilisation de
                            différents outils de création et de gestion de
                            contenu. <br /> <br />
                            J'ai pu mettre en pratique ces connaissances et
                            compétences à travers plusieurs projets que j'ai
                            réalisés tout au long des années.
                        </p>
                        <div
                            className={`flex gap-6 text-sm font-medium ${
                                darkMode ? "text-zinc-300" : "text-zinc-700"
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-blue-400" /> 20
                                ans
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe size={16} className="text-blue-400" />{" "}
                                Paris
                            </div>
                            <div className="flex items-center gap-2">
                                <IdCard size={16} className="text-blue-400" />{" "}
                                Vehiculé (Permi B)
                            </div>
                        </div>
                    </div>
                    <div
                        className={`aspect-square rounded-3xl overflow-hidden border relative ${
                            darkMode
                                ? "bg-zinc-800 border-white/10"
                                : "bg-zinc-200 border-black/10"
                        }`}
                    >
                        <img
                            src={H_photo}
                            alt="Moi"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* PROJETS */}
            <section id="projets" className="pb-40 px-4">
                <div className="max-w-6xl mx-auto mb-12 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Mes Projets
                    </h2>
                </div>
                <div className="flex flex-col gap-10">
                    {DATA.map((item, index) => (
                        <Project
                            key={item.id}
                            data={item}
                            index={index}
                            open={setSelectedProject}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            </section>

            {/* COMPÉTENCES */}
            <section
                id="competences"
                className={`py-32 border-t ${
                    darkMode
                        ? "border-white/5 bg-zinc-900/20"
                        : "border-black/5 bg-zinc-100"
                }`}
            >
               {/* ... contenu competences ... */}
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12">Compétences</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                Développement
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <Skill
                                    title="ReactJS"
                                    icon={Code}
                                    borderColor="hover:border-blue-500/50"
                                    gradientColor="from-blue-500/10"
                                />
                                <Skill
                                    title="Angular"
                                    icon={Code}
                                    borderColor="hover:border-blue-500/50"
                                    gradientColor="from-blue-500/10"
                                />
                                <Skill
                                    title="HTML/CSS/JS"
                                    icon={FileCode}
                                    borderColor="hover:border-blue-500/50"
                                    gradientColor="from-blue-500/10"
                                />
                                <Skill
                                    title="Bootstrap"
                                    icon={Component}
                                    borderColor="hover:border-blue-500/50"
                                    gradientColor="from-blue-500/10"
                                />
                                <Skill
                                    title="Spring Boot"
                                    icon={Server}
                                    borderColor="hover:border-blue-500/50"
                                    gradientColor="from-blue-500/10"
                                />
                                <Skill
                                    title="Php"
                                    icon={Code}
                                    borderColor="hover:border-blue-500/50"
                                    gradientColor="from-blue-500/10"
                                />
                                <Skill
                                    title="MySQL"
                                    icon={Database}
                                    borderColor="hover:border-blue-500/50"
                                    gradientColor="from-blue-500/10"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Design</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <Skill
                                    title="Suite Adobe"
                                    icon={PenTool}
                                    borderColor="hover:border-pink-500/50"
                                    gradientColor="from-pink-500/10"
                                />
                                <Skill
                                    title="Design UX/UI"
                                    icon={DraftingCompass}
                                    borderColor="hover:border-pink-500/50"
                                    gradientColor="from-pink-500/10"
                                />
                                <Skill
                                    title="Figma"
                                    icon={Slice}
                                    borderColor="hover:border-pink-500/50"
                                    gradientColor="from-pink-500/10"
                                />
                                <Skill
                                    title="Canva"
                                    icon={Palette}
                                    borderColor="hover:border-pink-500/50"
                                    gradientColor="from-pink-500/10"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Outils</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <Skill
                                    title="Blender"
                                    icon={Box}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                                <Skill
                                    title="Docker"
                                    icon={Container}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                                <Skill
                                    title="Unity"
                                    icon={Cuboid}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                                <Skill
                                    title="Git & GitHub"
                                    icon={GitBranch}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                                <Skill
                                    title="WordPress & Divi"
                                    icon={Globe}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                                <Skill
                                    title="Gestion de projet"
                                    icon={ClipboardList}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                                <Skill
                                    title="Marketing Digital"
                                    icon={TrendingUp}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                                <Skill
                                    title="Gestion Seo"
                                    icon={Search}
                                    borderColor="hover:border-green-500/50"
                                    gradientColor="from-green-500/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                            href="mailto:etu@alex.dev"
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
        </div>
    );
}