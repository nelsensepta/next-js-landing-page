import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollTop from "./molecules/ScrollTop";

export default function Footer() {
  return (
    <footer className="bg-bookmark-blue dark:bg-bookmark-dark py-8 relative">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <div className="py-1">
            <Image src="/book.svg" height={50} width={50} alt="books" />
          </div>
          <ul className="flex text-white sm:gap-12 gap-5 flex-wrap justify-center text-md">
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
          </ul>
        </div>
        <div className="flex gap-12 mt-12 md:mt-0 ">
          <Link href="#">
            <a>
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                size="2x"
                className="text-bookmark-white hover:text-bookmark-grey"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FontAwesomeIcon
                icon={["fab", "youtube"]}
                size="2x"
                className="text-bookmark-white hover:text-bookmark-grey"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                size="2x"
                className="text-bookmark-white hover:text-bookmark-grey dark:hover:text-title-dark-second"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex md:justify-start container items-center pt-10 justify-center">
        <p className="text-sm text-bookmark-white">
          &copy;{" "}
          <Link href="https://github.com/nelsensepta">
            <a className="text-blue-400" target="_blank">
              Nelsen Septa
            </a>
          </Link>
          . All Right Reserved
        </p>
      </div>
      <ScrollTop />
    </footer>
  );
}
