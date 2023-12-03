import React from "react";
import Image from "next/image";
import { FadeIn } from "@/app/components/Animations";

const PisoAltoETetoBaixo = () => {
  return (
    <FadeIn className="flex justify-center items-center flex-col">
      <h1 className="text-8xl font-play pt-10 py-3 font-bold mb-2 md:text-4xl sm:text-lg">
      Piso Alto E Teto Baixo
      </h1>
      <div className="flex flex-col z-[40] mb-[100px]">
        <div className="bg-[#d7db56] max-w-4xl p-4 rounded-xl font-mon font-semibold md:max-w-sm sm:max-w-[300px]">
          <p>
            Questão de piso alto e teto baixo é algo muito intrigante, pois nós
            bota para pensar não apenas como matemáticos, mas sim ultilizado a
            criatividade e nós permitindo pensar em desenhos para tentar
            simplificar. Eu simplesmente achei incrível! As questões do camelo,
            e da lã são incríveis! E pensar na solução é ainda mais incrível !
          </p>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="flex justify-center mt-10">
            <Image
              src="/assets/45c43aeb-e9bf-417a-87aa-a8cefb4d8a16.jpg"
              alt="gatinho"
              width={300}
              height={300}
              className="select-none pointer-events-none md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
          <div className="flex justify-center mt-10">
            <Image
              src="/assets/Screenshot_3.png"
              alt="gatinho"
              width={300}
              height={300}
              className="select-none pointer-events-none md:w-[100px] md:h-[100px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default PisoAltoETetoBaixo;
