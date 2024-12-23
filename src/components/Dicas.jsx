import { Heart, HeartOff, Heater } from "lucide-react";
import { useState } from "react";

export default function Dicas({ dicas, onClickLike }) {
  return (
    <div className="w-full h-auto gap-5  max-[700px]:grid-cols-none grid-cols-2 grid">
      {dicas.map((dica) => (
        <section
          key={dica.id}
          className="bg-[#D5CFE1] w-full rounded-[50px] flex flex-col justify-between"
        >
          <div className="w-[100%] h-[80px] rounded-t-[50px] flex justify-center items-center bg-[#464655] text-[20px] text-white p-5 font-bold ">
            <h1>{dica.title}</h1>
          </div>
          <p className="p-5">{dica.description}</p>
          <div onClick={() => onClickLike(dica.id)} className={`w-[100%] flex justify-center mb-9`}>
            {dica.like? <Heart /> : <HeartOff />}
            
          </div>
        </section>
      ))}
    </div>
  );
}
