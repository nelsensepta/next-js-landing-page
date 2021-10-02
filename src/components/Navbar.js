import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [canvas, setCanvas] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState("");
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDark("dark");
    } else {
      setDark("light");
    }
  }, []);

  return (
    <header className=" top-0 inset-x-0 shadow-md dark:bg-transparent  backdrop-blur-lg fixed z-50">
      <nav className="container flex sm:items-center justify-between py-4 items-start">
        <div className="flex-1 justify-start self-start">
          <Image
            src="/book.svg"
            height={50}
            width={50}
            alt="bars"
            blurDataURL="/book.svg"
            placeholder="blur"
          />
        </div>
        <ul
          className={`${
            canvas ? "flex pt-20" : "hidden"
          } sm:flex flex-1 justify-end items-center gap-12 flex-col sm:flex-row text-bookmark-blue dark:text-title-dark text-md`}
        >
          <hr className="w-full border-t-2 border-black text-blue-300 dark:border-white md:hidden" />
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
          <li className="cursor-pointer btn btn-red">
            <Link href="#">Login</Link>
          </li>
          <FontAwesomeIcon
            icon={theme !== dark ? "sun" : "moon"}
            size="2x"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </ul>
        <div className="flex sm:hidden flex-1 justify-end gap-10 pt-3">
          <FontAwesomeIcon
            icon={theme !== dark ? "sun" : "moon"}
            size="2x"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <FontAwesomeIcon
            icon="align-right"
            size="2x"
            onClick={() => setCanvas(!canvas)}
          />
        </div>
      </nav>
    </header>
  );
}
