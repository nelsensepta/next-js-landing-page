import Link from "next/link";
import WebDesign from "./lotties/WebDesign";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 ">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1  flex-col  items-center lg:items-start">
          <h2 className="text-bookmark-blue dark:text-title-dark text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            A Simple Bookmark Manager
          </h2>
          <p className="text-bookmark-grey dark:text-title-dark-second text-lg text-center lg:text-left mb-6">
            A clean and simple interface to organize your favourite website.
            Open a new browser tab and screen load instantly. Try it for free
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <Link href="#">
              <a className="btn btn-purple ">Get in on Chrome</a>
            </Link>
            <Link href="#">
              <a className="btn btn-white dark:hover:bg-blue-dark hover:bg-bookmark-purple dark:hover:text-white hover:text-white dark:text-black">
                Get in on Firefox
              </a>
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <WebDesign lottie="website-animation" />
        </div>
      </div>
      <div className="hidden md:block bg-bookmark-purple dark:bg-bookmark-white rounded-l-full absolute lg:h-72 md:h-1/2 md:top-28 w-1/2 lg:top-36 right-0 lg:-right-36"></div>
    </section>
  );
}
