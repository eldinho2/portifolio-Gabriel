import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import HamburguerMenu from "./HamburguerMenu";


function Header() {

  return (
    <header
      className="bg-[#d7dd3e] fixed top-0 w-full flex items-center justify-around mx-auto transition-all ease-in-out duration-500 z-50"
    >
      <Link href="/">
        <div className="cursor-pointer">
          <Image
            src={"/assets/UERJ LOGO.png"}
            alt="UERJ Logo"
            width={60}
            height={60}
          />
        </div>
      </Link>
      <div className="flex align-middle justify-center items-center text-black gap-5 select-none sm2:hidden sm:hidden md:hidden md:text-sm lg:text-xs">
        <div className="flex items-center gap-1 group hover:text-yellow-900 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/">Início</Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-900 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/SalaDeAulaInvertida">Sala de aula invertida</Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-900 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/Gameficacao">
            Gameficação
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-900 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/MedirEComparar">Medir e comparar</Link>
          </div>
        </div>
        <div className="flex items-center gap-1 group hover:text-yellow-900 hover:underline">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiFillStar />
            <Link href="/PisoAltoETetoBaixo">Piso alto e  teto baixo</Link>
          </div>
        </div>
      </div>
      <HamburguerMenu />
    </header>
  );
}

export default Header;
