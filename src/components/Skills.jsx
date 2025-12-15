import React from 'react';

function Skill({ title, icon: Icon, borderColor = 'hover:border-zinc-500/50', gradientColor = 'from-zinc-500/10' }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 p-4 transition-all ${borderColor}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="mb-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
          {Icon && <Icon className="w-5 h-5 text-blue-400" />}
        </div>
        <div>
          <h3 className="text-md font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Skill;