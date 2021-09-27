import Link from "next/link";
import Image from "next/image";
import * as Blob from "./Circle";
import WebDesign from "../lotties/WebDesign";

export default function Feature({
  reverse,
  lottieOn,
  brOn,
  tlOn,
  one,
  lottieName,
  title,
  content,
}) {
  return (
    <div className={`mt-20 ${one ? "lg:mt-24" : "lg:mt-52"}`}>
      <div
        className={`container flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row  "
        } items-center justify-center gap-x-24 `}
      >
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 relative">
          {lottieOn ? (
            <WebDesign lottie={lottieName} />
          ) : (
            <Image
              src="/svg/amico.svg"
              height={300}
              width={400}
              qulity={100}
              className="z-10"
            />
          )}
          {tlOn && <Blob.Circle1 tl={tlOn} />}
          {brOn && <Blob.Circle2 br={brOn} />}
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue">{title}</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">
            {content}
          </p>
          <Link href="#">
            <a className="btn btn-purple hover:bg-bookmark-white hover:text-black">
              More Info
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
