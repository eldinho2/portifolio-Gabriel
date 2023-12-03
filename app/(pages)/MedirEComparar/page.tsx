import React from "react";
import Image from "next/image";
import { FadeIn } from "@/app/components/Animations";

const MedirEComparar = () => {
  return (
    <FadeIn className="flex justify-center items-center flex-col">
      <h1 className="text-8xl font-play pt-10 py-3 font-bold mb-2 md:text-4xl sm:text-lg">
      Medir E Comparar
      </h1>
      <div className="flex flex-col z-[40] mb-[100px]">
        <div className="bg-[#d7db56] max-w-4xl p-4 rounded-xl font-mon font-semibold md:max-w-sm sm:max-w-[300px]">
          <p>
            Medindo e comparando na prática, na segunda aula, fomos ao lado
            externo ao qual fomos expostos a um problema, de um certo nível de
            complexidade. No qual tínhamos que medir a distância de um lado de
            um &ldquo;precipício&ldquo; ao outro. No qual não tínhamos uma ponte, e iríamos
            construir ela, porém teríamos que medir o tamanho &ldquo;exato&ldquo; da ponte.
            Assim, tínhamos um giz, uma régua e uma trena, nenhum dos matérias
            chegavam ao outro lado. Concluímos no final que por semelhança de
            triângulo dava pra calcular, chegando ao resultado de 19,5M
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src="/assets/bd784665-228a-4299-a805-4dc8db403684.jpg"
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

export default MedirEComparar;
