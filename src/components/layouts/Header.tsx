import Link from "next/link";
import Image from "next/image";
import revery from "../../assesst/logo-red.png";

export const Header = () => {
  return (
    <>
      <header className="w-full flex items-center justify-center">
        <nav className="flex flex-row items-center justify-between bg-white px-32 py-4 w-full ">
          <div className="">
            <Image src={revery} alt="Revery" width={132} />
          </div>
          <div className="">
            <ul className="flex flex-row gap-6 text-lg text-[#0F072C]">
              <li className="dark:hover:text-neutral-300 hover:text-neutral-500">
                <Link href="#about">About</Link>
              </li>
              <li className="dark:hover:text-neutral-300 hover:text-neutral-500">
                <Link href="">Works</Link>
              </li>
              <li className="dark:hover:text-neutral-300 hover:text-neutral-500">
                <Link href="#service">Services</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button
              type="button"
              className="focus:outline-none cursor-pointer text-white text-md font-medium bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-sm px-3 py-0.5 me-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Contact us
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
