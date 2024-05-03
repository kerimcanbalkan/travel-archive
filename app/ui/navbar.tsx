import { FaUserCircle } from "react-icons/fa";
import { Pacifico } from "next/font/google";


const pacifico = Pacifico({ weight: ['400'], subsets: ['latin'] })

export default function NavBar() {
  return (
    <nav className="fixed z-30 flex justify-between px-28 py-10 items-center w-full">
      <a href="/">
        <h1 className={`text-3xl text-white font-bold hover:text-light-accent ${pacifico.className}`}>TravelArchive</h1>
      </a>
      <nav className="contents">
        <a className="text-3xl" href="">
          <FaUserCircle className="fill-white hover:fill-light-accent" />
        </a>
      </nav>
    </nav >
  )
}
