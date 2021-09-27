import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <header className=" top-0 inset-x-0 shadow-md backdrop-blur-lg fixed z-50">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex-1">
          <Image src="/book.svg" height={50} width={50} />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue text-md">
          <li className="cursor-pointer hover:underline">
            <Link href="#">Features</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#">About</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#">Pricing</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="#">Contact</Link>
          </li>
          <li className="cursor-pointer bg-bookmark-red text-white rounded-md px-7 py-3">
            <Link href="#">Login</Link>
          </li>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end gap-10">
          <FontAwesomeIcon icon="moon" size="2x" />
          <FontAwesomeIcon icon="align-right" size="2x" />
        </div>
      </nav>
    </header>
  );
}
