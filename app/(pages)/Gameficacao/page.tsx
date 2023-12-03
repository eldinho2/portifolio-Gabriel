import React from "react";
import Image from "next/image";
import { FadeIn } from "@/app/components/Animations";

const Gameficação = () => {
  return (
    <FadeIn className="flex justify-center items-center flex-col">
      <h1 className="text-8xl font-play pt-10 py-3 font-bold mb-2 md:text-4xl sm:text-lg">
      Gameficação
      </h1>
      <div className="flex flex-col z-[40] mb-[100px]">
        <div className="bg-[#d7db56] max-w-4xl p-4 rounded-xl font-mon font-semibold md:max-w-sm sm:max-w-[300px]">
          <p>
            Na segunda aula exposta que tivemos, foi uma aula de gamificação, na
            qual ele propôs um jogo de caça ao tesouro, procuramos por pontos
            específicos pela faculdade, como auditórios e locais de estudo. No
            qual era um jogo de cálculos, calculamos porcentagem, assim no final
            desbloqueariamos um cadeado com a senha que descobrimos, mas não
            tínhamos o cadeado ao final. Eu achei a ideia da gamificação muito
            boa! Pois assim com ideias como está poderíamos apresentar locais da
            escola que antes os alunos não tinham acesso, como a biblioteca,
            sala de música se a escola tiver e etc. Uma explicação que eu achei
            sobre gameficação no Google seria &ldquo;A gamificação na matemática faz
            com que os alunos desenvolvam um perfil mais participativo nas aulas
            e criem autonomia na hora dos estudos, pois a utilização de jogos no
            processo de ensino-aprendizagem aproxima o aluno, deixando as aulas
            e a disciplina mais atrativas.&rdquo; Oque e verdade, porém com outras
            abordagens da para apresentar aos alunos novos locais, e até a sala
            de aula invertida daria pra aplicar
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
            src="/assets/40a34a51-0c40-4b6e-af7e-86cb843753a2.jpg"
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

export default Gameficação;
