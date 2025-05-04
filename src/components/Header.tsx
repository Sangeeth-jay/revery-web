import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/">
        Revery
      </Link>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
