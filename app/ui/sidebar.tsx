import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  isOpen: boolean;
  toggleSidebar: (countryName: string) => void;
  countryName: string;
}

export default function SideBar({ isOpen, toggleSidebar, countryName }: Props) {
  return (
    <div id="sidebar" className={`w-2/5 h-lvh bg-white fixed top-0 left-0 z-50 p-10 rounded-md  ${isOpen ? 'transition-transform translate-x-0' : 'hidden transition-transform -translate-x-full'}`} >
      <div className="container flex justify-end">
        <button className="" onClick={() => {
          toggleSidebar("")
        }} ><IoIosCloseCircleOutline className="fill-light-accent text-xl" /></button>
      </div>
      <h1 id="countryName" className="">{countryName}</h1>
    </div >
  );
}
