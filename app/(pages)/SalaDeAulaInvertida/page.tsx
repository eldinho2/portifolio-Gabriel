import React from "react";
import Image from "next/image";
import { FadeIn } from "@/app/components/Animations";

const SalaDeAulaInvertida = () => {
  return (
    <FadeIn className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-8xl font-play py-3 font-bold mb-2 md:text-4xl sm:text-lg">
      Sala De Aula Invertida
      </h1>
      <div className="flex flex-col z-[40] mb-[100px]">
        <div className="bg-[#d7db56] max-w-4xl p-4 rounded-xl font-mon font-semibold md:max-w-sm sm:max-w-[300px]">
          <p>
            Na sala de aula invertida, fomos indagados a fazer um dever em grupo
            na sala. Onde no qual o professor sem estar presente nos faz
            pesquisar e procurar aprender. No qual ele propôs uma atividade no
            desmos. Que no final da atividade, de probabilidade, testamos para
            ver se funcionava mesmo. Ultilizado um dado virtual. Assim procurar
            aprender mesmo sem o professor presente na sala.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src="/assets/8282f0bb-5b46-40c6-88c8-f57adf90d2c8.jpg"
            alt="gatinho"
            width={300}
            height={300}
            className="select-none pointer-events-none md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px]"
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default SalaDeAulaInvertida;
