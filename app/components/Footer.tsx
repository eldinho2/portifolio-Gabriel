import Image from "next/image";

const Footer = () => {
  return (
      <footer className="bg-[#d7dd3e] flex justify-center w-[100%] h-auto items-center">
        <div className="mb-3">
          <Image
            src="/assets/logoffp.png"
            alt="logoFFP"
            width={100}
            height={100}
            className="md:w-[70px] md:h-[60px]"
          />
        </div>
        <div className="font-edu text-base flex gap-2 font-semibold md:text-base sm:text-xs">
          <p>Discente: Gabriel de Aguiar Dantas Henrique</p>
          <p>Matemática</p>
          <p>Segundo semestre de 2023</p>
        </div>
      </footer>
  );
};

export default Footer;
