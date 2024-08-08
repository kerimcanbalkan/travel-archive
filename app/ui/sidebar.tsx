import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  isOpen: boolean;
  toggleSidebar: (countryName: string) => void;
  countryName: string;
}

export default function SideBar({ isOpen, toggleSidebar, countryName }: Props) {
  return (
    <div
      id="sidebar"
      className={`w-2/5 h-full bg-white fixed z-50 p-10 rounded-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="container flex justify-end">
        <button
          onClick={() => {
            toggleSidebar("");
          }}
        >
          <IoIosCloseCircleOutline className="fill-light-accent text-xl hover:text-2xl" />
        </button>
      </div>
      <h1 id="countryName">{countryName}</h1>
      <h3>Save your memories in {countryName}</h3>
    </div>
  );
}

