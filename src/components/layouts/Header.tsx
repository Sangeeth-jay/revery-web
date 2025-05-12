import Link from "next/link";
import Image from "next/image";
import revery from "../../assesst/logo-red.png";

export const Header = () => {
  return (
    <>
      <header className="sticky top-3 z-50 w-full flex items-center justify-center">
        <nav className="flex flex-row items-center justify-between rounded-xl w-3/5 bg-white pl-4 py-1.5 ">
          <div className="">
            <Image src={revery} alt="Revery" width={108} height={108} />
          </div>
          <div className="">
            <ul className="flex flex-row gap-6 text-lg text-[#0F072C]">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/works">Works</Link>
              </li>
              <li>
                <Link href="/service">Services</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button
              type="button"
              className="focus:outline-none cursor-pointer text-white text-xl font-medium bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 me-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Contact us
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
